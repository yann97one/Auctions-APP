package fr.eni.server.bo;

import fr.eni.server.dto.SignUpDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User implements Serializable {
    private long id;
    private String lastName;
    private String pseudo;
    private String firstName;
    private String email;
    private String password;
    private String phoneNumber;
    private String road;
    private String zipCode;
    private String city;
    private Role role;
    private int credit;


    public User(String lastName, String pseudo, String firstName, String email, String password, String phoneNumber, String road, String zipCode, String city, Role role, int credit) {
        this.lastName = lastName;
        this.pseudo = pseudo;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.road = road;
        this.zipCode = zipCode;
        this.city = city;
        this.role = role;
        this.credit = credit;
    }

    public static  User fromSIgnupToUser(SignUpDto signUpDto) {
        return new User(signUpDto.lastName(), signUpDto.pseudo(), signUpDto.firstName(), signUpDto.email(), signUpDto.password(), signUpDto.phoneNumber(), signUpDto.road(), signUpDto.zipCode(), signUpDto.city(), Role.USER, 0);
    }


}
