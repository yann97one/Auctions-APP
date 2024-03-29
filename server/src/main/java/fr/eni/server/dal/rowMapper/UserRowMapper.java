package fr.eni.server.dal.rowMapper;

import fr.eni.server.bo.Role;
import fr.eni.server.bo.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        User user = new User();
        user.setId(rs.getLong("id_user"));
        user.setLastName(rs.getString("lastname"));
        user.setPseudo(rs.getString("pseudo"));
        user.setFirstName(rs.getString("firstname"));
        user.setEmail(rs.getString("email"));
        user.setPassword(rs.getString("password"));
        user.setPhoneNumber(rs.getString("phone"));
        user.setRoad(rs.getString("road"));
        user.setZipCode(rs.getString("zip"));
        user.setCity(rs.getString("city"));
        user.setCredit(rs.getInt("credit"));
        user.setRole(Role.valueOf(rs.getString("role")));
        return user;
    }
}
