package fr.eni.server.bo;

import java.io.Serializable;
import java.util.Objects;

public class Categories implements Serializable {/**
 * Numéro de sérialisation
 */
private static final long serialVersionUID = 1L;
    private int no_categorie;

    private String libelle;


    public int getNo_categorie() {
        return no_categorie;
    }

    public String getLibelle() {
        return libelle;
    }

    public Categories(String libelle, int no_categorie) {
        this.libelle=libelle;
        this.no_categorie=no_categorie;
    }
}
