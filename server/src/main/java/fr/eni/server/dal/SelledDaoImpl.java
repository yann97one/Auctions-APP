package fr.eni.server.dal;

import fr.eni.server.bo.Selled;
import fr.eni.server.dal.rowMapper.SelledRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class SelledDaoImpl implements SelledDAO {


    public final String INSERT = "INSERT INTO Selled_Articles(article_name,description,auction_begin_date,auction_end_date,initial_price,sell_price,user_id,category_id) VALUES "
            + " (:name, :description, :beginDate, :endDate,:initialPrice,:sellPrice,:userId,:idCategory)";
    private final String FIND_ALL = "SELECT Selled_Articles.id_article,Users.id_user, Users.pseudo, Selled_Articles.article_name, Selled_Articles.description, Selled_Articles.auction_begin_date, Selled_Articles.auction_end_date, Selled_Articles.initial_price, Selled_Articles.sell_price, Selled_Articles.category_id,Selled_Articles.user_id " +
            " FROM Selled_Articles" +
            " INNER JOIN Users ON Users.id_user = Selled_Articles.user_id";

    private final String FIND_BY_ID = "SELECT Selled_Articles.id_article,Users.id_user, Users.pseudo, Selled_Articles.article_name, Selled_Articles.description, Selled_Articles.auction_begin_date, Selled_Articles.auction_end_date, Selled_Articles.initial_price, Selled_Articles.sell_price, Selled_Articles.category_id,Selled_Articles.user_id " +
            " FROM Selled_Articles" +
            " INNER JOIN Users ON Users.id_user = Selled_Articles.user_id where id_article=:id_article";


    private final String DELETE = "DELETE FROM Selled_Articles where id_article= :id_article;";


    private final String FIND_BY_CATEGORY_AND_NAME = "SELECT u.id_user, u.pseudo, sa.article_name, sa.description, sa.auction_begin_date, sa.auction_end_date, sa.initial_price, sa.sell_price, sa.category_id, sa.user_id,sa.id_article " +
            "FROM Users u INNER JOIN Selled_Articles sa ON u.id_user = sa.user_id INNER JOIN Categories c on c.id_category = sa.category_id where c.libelle=:libelle and sa.article_name like :article_name;";


    private final String UPDATE_PRICE = "UPDATE Selled_Articles set sell_price=:sell_price where id_article=:id_article";

    private final String FIND_MY_SELL = "SELECT " +
            "     Users.pseudo,Selled_Articles.id_article,Selled_Articles.article_name," +
            "    Selled_Articles.description," +
            "    Selled_Articles.auction_begin_date," +
            "    Selled_Articles.auction_end_date," +
            "    Selled_Articles.initial_price," +
            "    Selled_Articles.sell_price," +
            "    Selled_Articles.user_id," +
            "    Selled_Articles.category_id " +
            "FROM" +
            "    Users" +
            " INNER JOIN" +
            "    Selled_Articles " +
            "ON" +
            "    Selled_Articles.user_id = Users.id_user " +
            "WHERE" +
            "    Selled_Articles.user_id =:id_user;";

    private NamedParameterJdbcTemplate jdbcTemplate;

    public SelledDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(jdbcTemplate);
    }

    @Override
    public void create(Selled selled) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("name", selled.getName());
        namedParameters.addValue("description", selled.getDescription());
        namedParameters.addValue("beginDate", selled.getBeginDate());
        namedParameters.addValue("endDate", selled.getEndDate());
        namedParameters.addValue("initialPrice", selled.getInitialPrice());
        namedParameters.addValue("sellPrice", selled.getSellPrice());
        namedParameters.addValue("userId", selled.getUserId());
        namedParameters.addValue("idCategory", selled.getIdCategory());
        jdbcTemplate.update(INSERT, namedParameters);
    }


    @Override
    public void delete(Long id_article) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article", id_article);
        jdbcTemplate.update(DELETE, namedParameters);
    }

    @Override
    public List<Selled> getAll() {
        return jdbcTemplate.query(FIND_ALL, new SelledRowMapper());
    }

    @Override
    public Selled getById(long id_article) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article", id_article);
        List<Selled> selled = jdbcTemplate.query(FIND_BY_ID, namedParameters, new SelledRowMapper());
        return selled.get(0);
    }

    @Override
    public List<Selled> getByArticleNameAndCategory(String article_name, String libelle) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("article_name", "%" + article_name + "%");
        namedParameters.addValue("libelle", libelle);
        return jdbcTemplate.query(FIND_BY_CATEGORY_AND_NAME, namedParameters, new SelledRowMapper());
    }

    @Override
    public int updatePrice(long id_article, long sell_price) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article", id_article);
        namedParameters.addValue("sell_price", sell_price);
        return jdbcTemplate.update(UPDATE_PRICE, namedParameters);
    }

    public List<Selled> listMySell(long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_user", id);
        return jdbcTemplate.query(FIND_MY_SELL, namedParameters, new SelledRowMapper());
    }
}
