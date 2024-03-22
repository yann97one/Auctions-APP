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
    private byte[] image;
    private int initialPrice;
    private int sellPrice;
    private long userId;
    private int idCategory;

    public Article(String name, String description, LocalDate beginDate, LocalDate endDate, int initialPrice, int sellPrice, long userId, int idCategory, byte[] image) {
        this.name = name;
        this.description = description;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.initialPrice = initialPrice;
        this.sellPrice = sellPrice;
        this.userId = userId;
        this.idCategory = idCategory;
        this.image = image;
    }

    public boolean isAuctionOver() {
        return LocalDate.now().isAfter(this.endDate);
    }


}
