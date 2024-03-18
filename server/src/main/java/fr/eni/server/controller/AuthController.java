package fr.eni.server.controller;

import fr.eni.server.config.UserAuthProvider;
import fr.eni.server.dto.CredentialsDTO;
import fr.eni.server.dto.SignUpDto;
import fr.eni.server.dto.UserDto;
import fr.eni.server.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody CredentialsDTO credentialsDto) {
        System.out.println(credentialsDto);
        UserDto userDto = userService.login(credentialsDto);

        userDto.setToken(userAuthProvider.createToken(userDto));
        System.out.println(userDto);
        return ResponseEntity.ok(userDto.getToken());
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signupDto) {
        System.out.println(signupDto);
        UserDto createdUser = userService.register(signupDto);
        createdUser.setToken(userAuthProvider.createToken(createdUser));

        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(createdUser);

    }
}
