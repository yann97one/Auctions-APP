package fr.eni.server.dal.rowMapper;

import fr.eni.server.bo.Role;
import fr.eni.server.bo.Selled;
import fr.eni.server.bo.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class SelledRowMapper implements RowMapper<Selled> {
    @Override
    public Selled mapRow(ResultSet rs, int rowNum) throws SQLException {
        Selled selled = new Selled();
        selled.setId(rs.getLong("id_article"));
        selled.setName(rs.getString("article_name"));
        selled.setDescription(rs.getString("description"));
        selled.setBeginDate(rs.getDate("auction_begin_date").toLocalDate());
        selled.setEndDate(rs.getDate("auction_end_date").toLocalDate());
        selled.setInitialPrice(rs.getInt("initial_price"));
        selled.setSellPrice(rs.getInt("sell_price"));
        selled.setUserId(rs.getInt("user_id"));
        selled.setIdCategory(rs.getInt("category_id"));
        return selled;
    }
}
