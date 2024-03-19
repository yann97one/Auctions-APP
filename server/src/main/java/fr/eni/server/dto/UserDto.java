package fr.eni.server.dto;

import fr.eni.server.bo.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private long id;
    private String email;
    private String pseudo;
    private String firstName;
    private String token;
    private Role role;
}
