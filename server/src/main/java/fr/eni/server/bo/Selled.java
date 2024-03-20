package fr.eni.server.bo;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Selled {
    private long id;
    private String name;
    private String description;
    private Timestamp beginDate;
    private Timestamp endDate;
    private int initialPrice;
    private int sellPrice;
    private int userId;
    private int idCategory;
    private String pseudo;
    public Selled(String name, String description, Timestamp beginDate, Timestamp endDate, int initialPrice, int sellPrice, int userId, int idCategory) {
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
