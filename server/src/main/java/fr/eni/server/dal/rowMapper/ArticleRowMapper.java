package fr.eni.server.dal.rowMapper;

import fr.eni.server.bo.Article;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ArticleRowMapper implements RowMapper<Article> {
    @Override
    public Article mapRow(ResultSet rs, int rowNum) throws SQLException {
        Article article = new Article();
        article.setId(rs.getLong("id_article"));
        article.setName(rs.getString("article_name"));
        article.setDescription(rs.getString("description"));
        article.setBeginDate(rs.getDate("auctions_begin_date").toLocalDate());
        article.setEndDate(rs.getDate("auction_end_date").toLocalDate());
        article.setInitialPrice(rs.getInt("initial_price"));
        article.setSellPrice(rs.getInt("sell_price"));
        article.setUserId(rs.getInt("user_id"));
        article.setIdCategory(rs.getInt("id_category"));
        article.setImage(rs.getString("image"));
        return article;
    }
}
