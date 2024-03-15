package fr.eni.server.dal;

import fr.eni.server.bo.User;
import fr.eni.server.dal.rowMapper.UserRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDAO {

    public final String INSERT = "INSERT INTO Users(firstname,lastname,email,pseudo,phone,road,zip,city,user_password,credit,role) VALUES "
            + " (:firstname, :lastname, :email, :pseudo,:phone,:road,:zip,:city,:user_password,:credit,:role)";
    private final String FIND_ALL = "SELECT * FROM Users";

    private final String FIND_BY_ID = "SELECT * FROM Users where id_user=:id_user";
    private final String DELETE = "DELETE FROM Users where id_user= :id_user;";
    private NamedParameterJdbcTemplate jdbcTemplate;

    public UserDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(jdbcTemplate);
    }

    @Override
    public void create(User user) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("firstname",user.getFirstname());
        namedParameters.addValue("lastname",user.getName());
        namedParameters.addValue("email",user.getEmail());
        namedParameters.addValue("pseudo",user.getPseudo() );
        namedParameters.addValue("phone",user.getPhone());
        namedParameters.addValue("road",user.getRoad());
        namedParameters.addValue("zip",user.getZip());
        namedParameters.addValue("city",user.getCity());
        namedParameters.addValue("user_password",user.getPassword());
        namedParameters.addValue("credit",user.getCredit());
        namedParameters.addValue("role",user.getRole().name());
        jdbcTemplate.update(INSERT, namedParameters);
    }
    @Override
    public void delete(Long userId) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_user",userId);
        jdbcTemplate.update(DELETE, namedParameters);
    }

    @Override
    public List<User> getAll() {
        return jdbcTemplate.query(FIND_ALL, new UserRowMapper());
    }

    @Override
    public User getById(long userId) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id_user",userId);
        List<User> users= jdbcTemplate.query(FIND_BY_ID, namedParameters, new UserRowMapper());
        return users.get(0);
    }
}