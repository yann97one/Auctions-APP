package fr.eni.server.service;

import fr.eni.server.bo.User;

import java.util.List;

public interface UserService {
        List<User> findAllUser();
        void saveUser(User user);

        String createUser(User user);
        String deleteUser(long id);

        User findByIdUser(long id);
}

