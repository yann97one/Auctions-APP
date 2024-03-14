package fr.eni.server.controller;

import fr.eni.server.bo.User;
import fr.eni.server.config.UserAuthProvider;
import fr.eni.server.dto.CredentialsDTO;
import fr.eni.server.dto.UserDto;
import fr.eni.server.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDTO credentialsDto) {
        UserDto userDto = userService.login(credentialsDto);
        userDto.setToken(userAuthProvider.createToken(userDto));
        return ResponseEntity.ok(userDto);
    }

    @GetMapping("/login")
    public ResponseEntity<List<String>> login() {
        return ResponseEntity.ok(List.of("login", "second"));
    }
}
