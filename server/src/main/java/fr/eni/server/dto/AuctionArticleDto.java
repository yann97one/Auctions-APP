package fr.eni.server.dto;

public record AuctionArticleDto(long sellerId, long articleId) {

    public static AuctionArticleDto build(long sellerId, long articleId) {
        return new AuctionArticleDto(sellerId, articleId);
    }
}
