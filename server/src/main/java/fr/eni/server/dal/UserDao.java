package fr.eni.server.dal;

import fr.eni.server.bo.User;

public interface UserDao extends Dao<User> {
    User findByLogin(String email, String password);
}
