package fr.eni.server.dal;

import fr.eni.server.bo.Withdrawal;
import fr.eni.server.dal.rowMapper.WithdrawalRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class WithdrawalDaoImpl implements WithdrawalDAO  {

    public final String INSERT = "INSERT INTO Withdrawal(id_article,zip,city,road) VALUES "
            + " (:id,:zip,:city,:road)";
    private final String FIND_ALL = "SELECT * FROM Withdrawal";

    private final String FIND_BY_ID = "SELECT * FROM Withdrawal where id_article=:id_article";
    private final String DELETE = "DELETE FROM Withdrawal where id_article= :id_article;";
    private NamedParameterJdbcTemplate jdbcTemplate;

    public WithdrawalDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(jdbcTemplate);
    }


    @Override
    public void create(Withdrawal obj) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id",obj.getId());
        namedParameters.addValue("city",obj.getCity());
        namedParameters.addValue("road",obj.getRoad());
        namedParameters.addValue("zip",obj.getZip() );
        jdbcTemplate.update(INSERT, namedParameters);
    }

    @Override
    public void delete(Long id_article) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article",id_article);
        jdbcTemplate.update(DELETE, namedParameters);
    }

    @Override
    public List<Withdrawal> getAll() {
        return jdbcTemplate.query(FIND_ALL, new WithdrawalRowMapper());
    }

    @Override
    public Withdrawal getById(long id_article) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article",id_article);
        List<Withdrawal> withdrawal= jdbcTemplate.query(FIND_BY_ID, namedParameters, new WithdrawalRowMapper());
        return withdrawal.get(0);
    }
}
