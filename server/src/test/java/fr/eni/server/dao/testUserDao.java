package fr.eni.server.dao;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import fr.eni.server.dal.UserDAO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import fr.eni.server.bo.User;

@SpringBootTest
class UserDAOTests {
    @Autowired
    UserDAO dao;

    @Test

    void contextLoads() {
        User user = new User("nomtest", "prenom", "pseudo", "email","mot_de_passe","telephone","rue","code","ville");
        dao.create(user);
       List<String> lst = dao.getAll();
       lst.forEach(System.out::println);
        assert lst.size()>0;

    }

}
