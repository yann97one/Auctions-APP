package fr.eni.server.dal.rowMapper;

import fr.eni.server.bo.Role;
import fr.eni.server.bo.User;
import fr.eni.server.bo.Withdrawal;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class WithdrawalRowMapper implements RowMapper<Withdrawal> {
    @Override
    public Withdrawal mapRow(ResultSet rs, int rowNum) throws SQLException {
        Withdrawal withdrawal = new Withdrawal();
        withdrawal.setRoad(rs.getString("road"));
        withdrawal.setZip(rs.getString("zip"));
        withdrawal.setCity(rs.getString("city"));
        withdrawal.setId(rs.getInt("id_article"));
        return withdrawal;
    }
}
