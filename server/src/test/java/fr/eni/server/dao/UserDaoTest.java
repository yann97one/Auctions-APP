package fr.eni.server.dao;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import fr.eni.server.bo.Role;
import fr.eni.server.dal.UserDAO;
import fr.eni.server.dal.UserDaoImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import fr.eni.server.bo.User;

import java.util.List;

@SpringBootTest
class UserDaoTest {
    @Autowired
    UserDaoImpl dao;

    @Test
    void contextLoads() {
        Role role = Role.ADMIN;
        Role role2 = Role.USER;
        User user = new User("nomtest", "prenom", "pseudo", "email", "mot_de_passe", "telephone", "rue", "code", "ville", role, 0);
        dao.create(user);
        List<User> lst = dao.getAll();
        lst.forEach(System.out::println);
        User user2 = dao.getById(1);
        System.out.println(user2.toString());
        long id = 4;
        dao.delete(id);
    }
}
