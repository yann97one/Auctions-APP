package fr.eni.server.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User implements Serializable {
    private long id;
    private String name;
    private String pseudo;
    private String firstname;
    private String email;
    private String password;
    private String phone;
    private String road;
    private String zip;
    private String city;
    private Role role;
    private int credit;


    public User(String name, String pseudo, String firstname, String email, String password, String phone, String road, String zip, String city, Role role, int credit) {
        this.name = name;
        this.pseudo = pseudo;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.road = road;
        this.zip = zip;
        this.city = city;
        this.role = role;
        this.credit = credit;
    }
}
