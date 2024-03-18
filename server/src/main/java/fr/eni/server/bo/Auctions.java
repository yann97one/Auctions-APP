package fr.eni.server.bo;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Auctions {
    private long id;
    private int amount;
    private int id_article;
    private int id_user;
    private LocalDate date;

    public Auctions(int amout, int id_article, int id_user, LocalDate date) {
        this.amount = amout;
        this.id_article = id_article;
        this.id_user = id_user;
        this.date = date;
    }
}
