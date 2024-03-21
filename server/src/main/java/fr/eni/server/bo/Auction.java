package fr.eni.server.bo;

import fr.eni.server.dto.AuctionDto;
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
    private long idArticle;
    private long idUser;
    private LocalDate date;

    public Auction(int amout, int id_article, int id_user, LocalDate date) {
        this.amount = amout;
        this.idArticle = id_article;
        this.idUser = id_user;
        this.date = date;
    }


}
