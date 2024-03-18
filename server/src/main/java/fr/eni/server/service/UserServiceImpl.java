package fr.eni.server.service;

import fr.eni.server.bo.Role;
import fr.eni.server.bo.User;
import fr.eni.server.dal.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDAO dao;

    @Override
    public List<User> findAllUser() {
        List<User> user = dao.getAll();
        return user;
    }

    @Override
    public String SaveUser() {
        return null;
    }

    @Override
    public String CreateUser(User user) {
        dao.create(user);
        return null;
    }

    @Override
    public String DeleteUser(long id) {
        dao.delete(id);
        return null;
    }

    @Override
    public User FindByIdUser(long id) {
        User user = dao.getById(id);
       return user;
    }
}