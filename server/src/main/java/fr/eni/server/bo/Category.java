package fr.eni.server.bo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Category implements Serializable {
    private int id;
    private String libelle;

    public Category(String libelle) {
        this.libelle = libelle;
    }
}
