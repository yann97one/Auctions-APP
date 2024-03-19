package fr.eni.server.dal;

import fr.eni.server.bo.User;
import fr.eni.server.dto.UserDto;

public interface UserDao extends Dao<User> {
    User findByLogin(String email, String password);

    User findByEmail(String email);
}
