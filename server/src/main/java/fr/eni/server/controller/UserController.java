package fr.eni.server.controller;

import fr.eni.server.bo.User;
import fr.eni.server.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;


    @GetMapping("/detail")
    public ResponseEntity<User> getUserDetail() {
        return ResponseEntity.ok(userService.getOne(4));
    }

}
