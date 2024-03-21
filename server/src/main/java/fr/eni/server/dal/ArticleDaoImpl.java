package fr.eni.server.dal;

import fr.eni.server.bo.Article;
import fr.eni.server.dal.rowMapper.ArticleRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Base64;
import java.util.List;

@Repository
public class ArticleDaoImpl implements ArticleDao {


    public final String INSERT = "INSERT INTO Selled_Articles(article_name,description,auctions_begin_date,auction_end_date,initial_price,sell_price,user_id,id_category,image) VALUES "
            + " (:name, :description, :beginDate, :endDate,:initialPrice,:sellPrice,:userId,:idCategory,CONVERT(varbinary(max),:image))";
    private final String FIND_ALL = "SELECT * FROM Selled_Articles ";

    private final String FIND_BY_ID = "SELECT * FROM Selled_Articles where id_article=:id_article";
    private final String DELETE = "DELETE FROM Selled_Articles where id_article= :id_article;";


    private final String FIND_BY_CATEGORY_AND_NAME = "SELECT * FROM Selled_Articles INNER JOIN Categories on Categories.id_category = Selled_Articles.category_id where libelle=:libelle and article_name like :article_name;";

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<Article> getByArticleNameAndCategory(String article_name, String libelle) {
        return null;
    }

    @Override
    public void create(Article article) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("name", article.getName());
        namedParameters.addValue("description", article.getDescription());
        namedParameters.addValue("beginDate", article.getBeginDate());
        namedParameters.addValue("endDate", article.getEndDate());
        namedParameters.addValue("initialPrice", article.getInitialPrice());
        namedParameters.addValue("sellPrice", article.getSellPrice());
        namedParameters.addValue("userId", article.getUserId());
        namedParameters.addValue("idCategory", article.getIdCategory());

        try {
            Base64.getEncoder().encode(article.getImage());
            byte[] imageBytes = Base64.getDecoder().decode(article.getImage());
            namedParameters.addValue("image", imageBytes);
        } catch (IllegalArgumentException e) {
            namedParameters.addValue("image", null);
        }
        jdbcTemplate.update(INSERT, namedParameters);
    }

    @Override
    public void delete(Long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article", id);
        jdbcTemplate.update(DELETE, namedParameters);
    }


    @Override
    public List<Article> getAll() {
        return jdbcTemplate.query(FIND_ALL, new ArticleRowMapper());
    }

    @Override
    public void update(Article obj) {

    }

    @Override
    public Article getById(long articleId) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article", articleId);
        return jdbcTemplate.queryForObject(FIND_BY_ID, namedParameters, new ArticleRowMapper());

    }
}
