package fr.eni.server.dto;

import fr.eni.server.bo.Role;
import fr.eni.server.bo.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private long id;
    private String email;
    private String pseudo;
    private String firstName;
    private String token;
    private int credits;
    private Role role;

    public static UserDto build(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setPseudo(user.getPseudo());
        dto.setFirstName(user.getFirstName());
        dto.setCredits(user.getCredit());
        dto.setRole(user.getRole());
        return dto;
    }

    public static UserDto build(SignUpDto signUpDto) {
        UserDto dto = new UserDto();
        dto.setEmail(signUpDto.email());
        dto.setPseudo(signUpDto.pseudo());
        dto.setFirstName(signUpDto.firstName());
        dto.setCredits(0);
        dto.setRole(Role.USER);
        return dto;
    }
}
