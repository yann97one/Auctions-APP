package fr.eni.server.dal.rowMapper;

import fr.eni.server.bo.Auctions;
import fr.eni.server.bo.Selled;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AuctionsRowMapper implements RowMapper<Auctions> {
    @Override
    public Auctions mapRow(ResultSet rs, int rowNum) throws SQLException {
        Auctions auctions = new Auctions();
        auctions.setId(rs.getLong("id_auctions"));
        auctions.setAmount(rs.getInt("auctions_amount"));
        java.sql.Date sqlDate = rs.getDate("auctions_date");
        auctions.setDate(sqlDate.toLocalDate());
        auctions.setId_article(rs.getInt("id_article"));
        auctions.setId_user(rs.getInt("id_user"));
        return auctions;
    }
}
