package fr.eni.server.dal;

import fr.eni.server.bo.Auction;
import fr.eni.server.dal.rowMapper.AuctionRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AuctionDaoImpl implements AuctionDAO{
    public final String INSERT = "INSERT INTO Auctions(auctions_amount,auctions_date,id_article,id_user) VALUES "
            + " (:amount, :date, :id_article, :id_user)";
    private final String FIND_ALL = "SELECT * FROM Auctions ";

    private final String FIND_BY_ID = "SELECT * FROM Auctions where id_auctions=:id_auctions";
    private final String DELETE = "DELETE FROM Auctions where id_auctions= :id_auctions;";

    private final String UPDATE = "UPDATE Auctions SET auctions_amount=:amount, auctions_date=:date, id_article=:id_article, id_user=:id_user WHERE id_auctions=:id_auctions";

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;



    @Override
    public void create(Auction auctions) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("amount",auctions.getAmount());
        namedParameters.addValue("id_article",auctions.getIdArticle());
        namedParameters.addValue("id_user",auctions.getIdUser());
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
    public List<Auction> getAll() {
        return jdbcTemplate.query(FIND_ALL, new AuctionRowMapper());
    }

    @Override
    public void update(Auction obj) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("amount",obj.getAmount());
        namedParameters.addValue("id_article",obj.getIdArticle());
        namedParameters.addValue("id_user",obj.getIdUser());
        namedParameters.addValue("date",obj.getDate());
        namedParameters.addValue("id_auctions",obj.getId());
        jdbcTemplate.update(UPDATE, namedParameters);
    }

    @Override
    public Auction getById(long id_auctions) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_auctions",id_auctions);
        List<Auction> auctions= jdbcTemplate.query(FIND_BY_ID, namedParameters, new AuctionRowMapper());
        return auctions.get(0);
    }
}
