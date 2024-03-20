package fr.eni.server.dal.rowMapper;

import fr.eni.server.bo.Auction;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AuctionRowMapper implements RowMapper<Auction> {
    @Override
    public Auction mapRow(ResultSet rs, int rowNum) throws SQLException {
        Auction auctions = new Auction();
        auctions.setId(rs.getLong("id_auctions"));
        auctions.setAmount(rs.getInt("auctions_amount"));
        auctions.setDate(rs.getDate("auctions_date").toLocalDate());
        auctions.setIdArticle(rs.getInt("id_article"));
        auctions.setIdUser(rs.getInt("id_user"));
        return auctions;
    }
}
