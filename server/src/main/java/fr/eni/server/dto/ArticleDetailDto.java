package fr.eni.server.dto;

import fr.eni.server.bo.Article;
import fr.eni.server.bo.Withdrawal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Base64;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ArticleDetailDto {
    private String image;
    private String name;
    private String description;
    private String category;
    private int sellPrice;
    private int initialPrice;
    private LocalDate endDate;
    private Withdrawal withdrawal;
    private String sellerName;

    public static ArticleDetailDto build(Article article) {
        ArticleDetailDto articleDetailDto = new ArticleDetailDto();
        articleDetailDto.setName(article.getName());
        articleDetailDto.setDescription(article.getDescription());
        articleDetailDto.setSellPrice(article.getSellPrice());
        articleDetailDto.setInitialPrice(article.getInitialPrice());
        articleDetailDto.setEndDate(article.getEndDate());
        articleDetailDto.setImage(Base64.getEncoder().encode(article.getImage()).toString());

        return articleDetailDto;
    }
}
