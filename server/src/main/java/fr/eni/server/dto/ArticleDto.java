package fr.eni.server.dto;

import fr.eni.server.bo.Article;
import fr.eni.server.bo.Auction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
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

    /*
    *
    *
    *  this.name = name;
        this.description = description;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.initialPrice = initialPrice;
        this.sellPrice = sellPrice;
        this.userId = userId;
        this.idCategory = idCategory;
    * */
//    public static Article build(ArticleDto articleDto){
//       return new Article(
//                articleDto.g,
//                articleDto.getContent(),
//                articleDto.getAuthor(),
//                articleDto.getCategory(),
//                articleDto.getDate(),
//                articleDto.getImage()
//       )
//    }
}
