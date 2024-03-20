package fr.eni.server.controller;

import fr.eni.server.bo.Role;
import fr.eni.server.bo.User;
import fr.eni.server.exceptions.AppException;
import fr.eni.server.security.jwt.JwtUtils;
import fr.eni.server.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;

import fr.eni.server.dto.CredentialsDTO;
import fr.eni.server.dto.SignUpDto;
import fr.eni.server.dto.UserDto;
import fr.eni.server.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {


    @Autowired
    private  UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;


//    @Autowired
//    public AuthController(UserService userService, AuthenticationManager authenticationManager) {
//        this.userService = userService;
//        this.authenticationManager = authenticationManager;
//    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDTO credentialsDto)  {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(credentialsDto.getEmail(), credentialsDto.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

        User user = userService.getByEmail(credentialsDto.getEmail());

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE,jwtCookie.toString()).body(UserDto.build(user));

    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signupDto) throws AppException{
//      if(userService.verifyIfUserExist(signupDto.email()).isPresent()){
//          throw new AppException("Email already in use",HttpStatus.BAD_REQUEST);
//      }
        System.out.println(signupDto);
        try{

       userService.register(signupDto);
      return ResponseEntity.ok(UserDto.build(signupDto));
        }catch(AppException e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/detail")
    public ResponseEntity<User> getUserDetail() {
        return ResponseEntity.ok(userService.getOne(4));
    }

}
