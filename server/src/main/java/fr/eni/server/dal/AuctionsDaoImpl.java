package fr.eni.server.dal;

import fr.eni.server.bo.Auctions;
import fr.eni.server.dal.rowMapper.AuctionsRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class AuctionsDaoImpl implements AuctionsDAO {


    public final String INSERT = "INSERT INTO Auctions(auctions_amount,auctions_date,id_article,id_user) VALUES "
            + " (:amount, :date, :id_article, :id_user)";
    private final String FIND_ALL = "SELECT id_auctions,auctions_date,auctions_amount,id_article,Users.id_user,Users.pseudo FROM Auctions INNER JOIN Users ON Users.id_user=Auctions.id_user";

    private final String FIND_BY_ID = "SELECT id_auctions,auctions_date,auctions_amount,id_article,Users.id_user,Users.pseudo FROM Auctions INNER JOIN Users ON Users.id_user=Auctions.id_user where id_auctions=:id_auctions";
    private final String DELETE = "DELETE FROM Auctions where id_auctions= :id_auctions;";

   private NamedParameterJdbcTemplate jdbcTemplate;

    public AuctionsDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(jdbcTemplate);
    }
    @Override
    public void create(Auctions auctions) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("amount",auctions.getAmount());
        namedParameters.addValue("id_article",auctions.getId_article());
        namedParameters.addValue("id_user",auctions.getId_user());
        namedParameters.addValue("date",auctions.getDate());
        jdbcTemplate.update(INSERT, namedParameters);
    }

    @Override
    public void delete(Long id_auctions) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_auctions",id_auctions);
        jdbcTemplate.update(DELETE, namedParameters);
    }

    @Override
    public List<Auctions> getAll() {

        return jdbcTemplate.query(FIND_ALL, new AuctionsRowMapper());


    }

    @Override
    public Auctions getById(long id_auctions) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_auctions",id_auctions);
        List<Auctions> auctions= jdbcTemplate.query(FIND_BY_ID, namedParameters, new AuctionsRowMapper());
        return auctions.get(0);
    }
}
