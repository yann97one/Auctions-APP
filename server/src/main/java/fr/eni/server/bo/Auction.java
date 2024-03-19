package fr.eni.server.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Auction implements Serializable {
    private long id;
    private int amount;
    private int id_article;
    private int id_user;
    private LocalDate date;

    public Auction(int amout, int id_article, int id_user, LocalDate date) {
        this.amount = amout;
        this.id_article = id_article;
        this.id_user = id_user;
        this.date = date;
    }
}
