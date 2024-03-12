package fr.eni.server.dal;

import fr.eni.server.bo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDAO{
    RowMapper<String> rowMapper = (rs, i) -> {
        User user = new User();
        user.setId(rs.getLong("no_utilisateur"));
        user.setNom(rs.getString("nom"));
        user.setPseudo(rs.getString("pseudo"));
        user.setPrenom(rs.getString("prenom"));
        user.setEmail(rs.getString("email"));
        user.setPassword(rs.getString("mot_de_passe"));
        user.setTelephone(rs.getString("telephone"));
        user.setRue(rs.getString("rue"));
        user.setCodePostal(rs.getString("code_postal"));
        user.setVille(rs.getString("ville"));
        user.setAdministrateur(rs.getInt("administrateur"));
        user.setCredit(rs.getInt("credit"));
        return user.toString();
    };
    public final String INSERT = "INSERT INTO Utilisateurs(nom,prenom,email,pseudo,telephone,rue,code_postal,ville,mot_de_passe,credit,administrateur) VALUES "
            + " (:nom, :prenom, :email, :pseudo,:telephone,:rue,:code_postal,:ville,:password,:credit,:administrateur)";

    private final String SELECTCONNEXION = "SELECT * FROM Utilisateurs where pseudo=:pseudoOuEmail or email=:pseudoOuEmail";
    private final String SELECTALL = "SELECT * FROM Utilisateurs";

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;
    @Override
    public void create(User user) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("nom", user.getNom());
        namedParameters.addValue("prenom", user.getPrenom());
        namedParameters.addValue("email", user.getEmail());
        namedParameters.addValue("pseudo", user.getPseudo());
        namedParameters.addValue("telephone", user.getTelephone());
        namedParameters.addValue("rue", user.getRue());
        namedParameters.addValue("code_postal", user.getCodePostal());
        namedParameters.addValue("ville", user.getVille());
        namedParameters.addValue("password", user.getPassword());
        namedParameters.addValue("credit", 0);
        namedParameters.addValue("administrateur", 0);

        jdbcTemplate.update(INSERT, namedParameters);

    }

    @Override
    public void connexion(String pseudoOuEmail, String password) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("pseudoOuEmail", pseudoOuEmail);



 //       jdbcTemplate.query(SELECTCONNEXION, namedParameters);
    }

    @Override
    public List<String> getAll() {
        return jdbcTemplate.query("SELECT* FROM Utilisateurs", rowMapper);
    }
}
