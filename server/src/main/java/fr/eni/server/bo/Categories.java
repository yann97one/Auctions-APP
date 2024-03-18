package fr.eni.server.bo;

import lombok.*;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Categories implements Serializable {
    private int idCategorie;
    private String libelle;
}