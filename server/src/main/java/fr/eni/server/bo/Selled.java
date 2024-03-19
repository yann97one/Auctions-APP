package fr.eni.server.bo;
import lombok.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Selled {
    private long id;
    private String name;
    private String description;
    private LocalDate beginDate;
    private LocalDate endDate;
    private int initialPrice;
    private int sellPrice;
    private int userId;
    private int idCategory;

    public Selled(String name, String description, LocalDate beginDate, LocalDate endDate, int initialPrice, int sellPrice, int userId, int idCategory) {
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