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
    private String nom;
    private String pseudo;
    private String prenom;
    private String email;
    private String password;
    private String telephone;
    private String rue;
    private String codePostal;
    private String ville;
    private String role;

    public User(String nom, String pseudo, String prenom, String email, String password, String telephone, String rue, String codePostal, String ville, String role) {
        this.nom = nom;
        this.pseudo = pseudo;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.rue = rue;
        this.codePostal = codePostal;
        this.ville = ville;
        this.role = role;
    }


}