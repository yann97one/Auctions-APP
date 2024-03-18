package fr.eni.server.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import fr.eni.server.bo.User;
import fr.eni.server.service.UserService;
import fr.eni.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

@Controller
@RequestMapping("/Users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<String> findAllUser() throws JsonProcessingException {
        List<User> userData =  userService.findAllUser();
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(userData);
        System.out.println(json);

        return ResponseEntity.ok(json);
    }
    @RequestMapping("/Create")
    @PostMapping()
    public ResponseEntity<String> createNewUser(@RequestBody String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            User userData = objectMapper.readValue(json, User.class);
            userService.CreateUser(userData);
            return ResponseEntity.ok("User created successfully");
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().body("Invalid JSON format");
        }
    }
    @RequestMapping("/Login")
    @PostMapping()
    public ResponseEntity<String> Login() {
        String user = "User Data"; // Replace this with actual data or a model object
        return ResponseEntity.ok(user);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> DeleteUser(@PathVariable("id") Long id) {
        userService.DeleteUser(id);
        String response =  "test";
        return ResponseEntity.ok(response);
    }
    @GetMapping("/{id}")
    public ResponseEntity<String> getUserById(@PathVariable("id") Long id) throws JsonProcessingException {
        User userData =  userService.FindByIdUser(id);
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(userData);
        System.out.println(json);
        return ResponseEntity.ok(json);
    }
}


