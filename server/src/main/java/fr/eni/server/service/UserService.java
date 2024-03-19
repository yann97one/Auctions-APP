package fr.eni.server.service;

import fr.eni.server.bo.User;

import java.util.List;

public interface UserService {
        List<User> findAllUser();
        void SaveUser(User user);

        String CreateUser(User user);
        String DeleteUser(long id);

        User FindByIdUser(long id);
}

