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
    private final String FIND_ALL = "SELECT * FROM Selled_Articles ";

    private final String FIND_BY_ID = "SELECT * FROM Selled_Articles where id_article=:id_article";
    private final String DELETE = "DELETE FROM Selled_Articles where id_article= :id_article;";


    private final String FIND_BY_CATEGORY_AND_NAME = "SELECT * FROM Selled_Articles INNER JOIN Categories on Categories.id_category = Selled_Articles.category_id where libelle=:libelle and article_name like :article_name;";

  private NamedParameterJdbcTemplate jdbcTemplate;

    public SelledDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(jdbcTemplate);
    }
    @Override
    public void create(Selled selled) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("name",selled.getName());
        namedParameters.addValue("description",selled.getDescription());
        namedParameters.addValue("beginDate",selled.getBeginDate() );
        namedParameters.addValue("endDate",selled.getEndDate());
        namedParameters.addValue("initialPrice",selled.getInitialPrice());
        namedParameters.addValue("sellPrice",selled.getSellPrice());
        namedParameters.addValue("userId",selled.getUserId());
        namedParameters.addValue("idCategory",selled.getIdCategory());
        jdbcTemplate.update(INSERT, namedParameters);
    }



    @Override
    public void delete(Long id_article) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article",id_article);
        jdbcTemplate.update(DELETE, namedParameters);
    }

    @Override
    public List<Selled> getAll() {
        return jdbcTemplate.query(FIND_ALL, new SelledRowMapper());
    }

    @Override
    public Selled getById(long id_article) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article",id_article);
        List<Selled> selled= jdbcTemplate.query(FIND_BY_ID, namedParameters, new SelledRowMapper());
        return selled.get(0);
    }

    @Override
    public List<Selled> getByArticleNameAndCategory(String article_name, String libelle) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("article_name", "%" + article_name + "%");
        namedParameters.addValue("libelle", libelle);
        return jdbcTemplate.query(FIND_BY_CATEGORY_AND_NAME,namedParameters, new SelledRowMapper());
    }



}
