package fr.eni.server.dal;

import fr.eni.server.bo.User;
import fr.eni.server.dal.rowMapper.UserRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDAO {
    public final String INSERT = "INSERT INTO Utilisateurs(nom,prenom,email,pseudo,telephone,rue,code_postal,ville,mot_de_passe,credit,administrateur) VALUES "
            + " (:nom, :prenom, :email, :pseudo,:telephone,:rue,:code_postal,:ville,:password,:credit,:administrateur)";
    private final String SELECT_CONNEXION = "SELECT * FROM Utilisateurs where pseudo=:pseudo or email=:email and password=:password";
    private final String SELECT_ALL = "SELECT * FROM Utilisateurs";
    private NamedParameterJdbcTemplate jdbcTemplate;

    public UserDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(jdbcTemplate);
    }

    @Override
    public void create(User user) {
        
    }

    @Override
    public void delete(User obj) {

    }

    @Override
    public List<User> getAll() {
        return jdbcTemplate.query(SELECT_ALL, new UserRowMapper());

    }

    @Override
    public User getById(long userId) {
        return null;
    }


}
