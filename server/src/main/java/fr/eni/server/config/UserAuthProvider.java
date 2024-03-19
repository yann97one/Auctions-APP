package fr.eni.server.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import fr.eni.server.bo.Role;
import fr.eni.server.bo.User;
import fr.eni.server.dto.UserDto;
import fr.eni.server.services.IUserService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Collections;
import java.util.Date;


@RequiredArgsConstructor
@Component
public class UserAuthProvider {
    //@Value("${jwt.secret}")
    private String secretKey = "bonju";

    private IUserService userService;

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(UserDto user) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + 3600000);
        Algorithm algorithm = Algorithm.HMAC256(secretKey);
        System.out.println(user);
        return JWT.create()
                .withSubject(user.getEmail())
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .withSubject(user.getEmail())
                .withClaim("id", user.getId())
                .withClaim("pseudo", user.getPseudo())
                .withClaim("firstName", user.getFirstName())
                .withClaim("role", String.valueOf(user.getRole()))
                .sign(algorithm);
    }

    public Authentication validateToken(String token) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secretKey))
                .build();
        DecodedJWT decoded = verifier.verify(token);
        UserDto user = UserDto.builder()
                .email(decoded.getSubject())
                .firstName(decoded.getClaim("firstName").asString())
                .pseudo(decoded.getClaim("pseudo").asString())
                .id(decoded.getClaim("id").asLong())
                .role(Enum.valueOf(Role.class, decoded.getClaim("role").asString()))
                .build();

        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
    }
}
