package fr.eni.server.controller;

import fr.eni.server.bo.User;
import fr.eni.server.dto.UserDto;
import fr.eni.server.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;


    @GetMapping("/detail/{id}")
    public ResponseEntity<User> getUserDetail(@PathVariable(name = "id") long id) {
        try {

            return ResponseEntity.ok(userService.getOne(id));
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto user) {
        //TODO
        return ResponseEntity.ok(user);
    }

}
