package fr.eni.server.bo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User implements Serializable {
    private String id;
    private String name;
    private String username;
    private String lastname;
    private String email;
    private String password;
    private String phone;
    private String street;
    private String zip;
    private String town;
    private Role role;

    public User(String name, String username, String lastname, String email, String password, String phone, String street, String zip, String town, Role role) {
        this.name = name;
        this.username = username;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.street = street;
        this.zip = zip;
        this.town = town;
        this.role = role;
    }


}