package fr.eni.server.bo;


import fr.eni.server.dto.CategoryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Category implements Serializable {
    private long id;
    private String libelle;

    public Category(String libelle) {
        this.libelle = libelle;
    }

    public static Category build(CategoryDto dto) {
        Category category = new Category();
        category.setLibelle(dto.libelle());
        return category;
    }
}
