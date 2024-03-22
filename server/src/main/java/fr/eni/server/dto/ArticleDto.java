package fr.eni.server.dto;

import fr.eni.server.bo.Article;
import fr.eni.server.bo.Auction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Base64;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ArticleDto {
    private String name;
    private String description;
    private LocalDate beginDate;
    private LocalDate endDate;
    private int initialPrice;
    private String image;

    public static ArticleDto build(Article article){
        ArticleDto articleDto = new ArticleDto();
        articleDto.name = article.getName();
        articleDto.description = article.getDescription();
        articleDto.beginDate = article.getBeginDate();
        articleDto.endDate = article.getEndDate();
        articleDto.initialPrice = article.getInitialPrice();
        articleDto.image = Base64.getEncoder().encodeToString(article.getImage());
        return articleDto;
    }
}
