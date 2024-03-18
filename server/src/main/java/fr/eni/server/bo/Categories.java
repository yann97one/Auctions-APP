package fr.eni.server.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Categories implements Serializable {
    private int idCategorie;
    private String libelle;
}
