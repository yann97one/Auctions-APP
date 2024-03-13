package fr.eni.server.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) {
        http.exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler)).authenticationEntryPoint(userAuthenticationEntryPoint)
                .addFilterBefore(new JwtAuthFilter(), BasicAuthenticationFilter.class)
                .csrf(AbstractHttpConfigurer::disable);
    }
}
