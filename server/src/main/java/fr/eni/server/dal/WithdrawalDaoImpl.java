package fr.eni.server.dal;

import fr.eni.server.bo.Withdrawal;
import fr.eni.server.dal.rowMapper.WithdrawalRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class WithdrawalDaoImpl implements WithdrawalDao{

    public final String INSERT = "INSERT INTO Withdrawal(id_article,zip,city,road) VALUES "
            + " (:id,:zip,:city,:road)";
    private final String FIND_ALL = "SELECT * FROM Withdrawal";

    private final String FIND_BY_ID = "SELECT * FROM Withdrawal where id_article=:id_article";
    private final String DELETE = "DELETE FROM Withdrawal where id_article= :id_article;";

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public void create(Withdrawal withdrawal) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article",withdrawal.getIdArticle());
        namedParameters.addValue("city",withdrawal.getCity());
        namedParameters.addValue("road",withdrawal.getRoad());
        namedParameters.addValue("zip",withdrawal.getZip() );
        jdbcTemplate.update(INSERT, namedParameters);
    }

    @Override
    public void delete(Long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article",id);
        jdbcTemplate.update(DELETE, namedParameters);
    }

    @Override
    public List<Withdrawal> getAll() {
        return jdbcTemplate.query(FIND_ALL, new WithdrawalRowMapper());
    }

    @Override
    public void update(Withdrawal obj) {
        
    }

    @Override
    public Withdrawal getById(long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_article",id);
        return jdbcTemplate.queryForObject(FIND_BY_ID, namedParameters, new WithdrawalRowMapper());

    }
}
