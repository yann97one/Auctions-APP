package fr.eni.server.dto;

import fr.eni.server.bo.Article;
import fr.eni.server.bo.Auction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuctionDto {
    private long id;
    private int amount;
    private Article article;
    private LocalDate date;
    private String sellerPseudo;

    public AuctionDto(long id, int amount, LocalDate date) {
        this.id = id;
        this.amount = amount;
        this.date = date;
    }

    public AuctionDto(Article article, int amount, LocalDate date) {
        this.article = article;
        this.amount = amount;
        this.date = date;
    }

    public static AuctionDto build(Auction auction) {
        AuctionDto dto = new AuctionDto();
        dto.setId(auction.getId());
        dto.setAmount(auction.getAmount());
        dto.setDate(auction.getDate());
        return dto;
    }
}
