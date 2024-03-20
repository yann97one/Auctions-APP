package fr.eni.server.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Article {

    private long id;
    private String name;
    private String description;
    private LocalDate beginDate;
    private LocalDate endDate;
    private String image;
    private int initialPrice;
    private int sellPrice;
    private int userId;
    private int idCategory;

    public Article(String name, String description, LocalDate beginDate, LocalDate endDate, int initialPrice, int sellPrice, int userId, int idCategory) {
        this.name = name;
        this.description = description;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.initialPrice = initialPrice;
        this.sellPrice = sellPrice;
        this.userId = userId;
        this.idCategory = idCategory;
    }


}
