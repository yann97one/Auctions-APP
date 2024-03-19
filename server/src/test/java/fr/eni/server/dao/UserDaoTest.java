package fr.eni.server.dao;

import fr.eni.server.bo.Role;
import fr.eni.server.dal.UserDAO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import fr.eni.server.bo.User;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@SpringBootTest
class UserDaoTest {
    @Autowired
    UserDAO dao;

    @Test
    @Transactional
    void contextLoads() {
        User user1 = new User(1, "John", "Doe", "johndoe", "john@example.com", "password123", "123456789", "123 Main St", "12345", "City", 0);
        dao.saveUser(user1);
        Role role= Role.ADMINISTRATEUR;
        Role role2= Role.UTILISATEUR;
        User user = new User("nomtest", "prenom", "pseudo", "email","mot_de_passe","telephone","rue","code","ville",role,0);
        dao.create(user);
        List<User> lst = dao.getAll();
        lst.forEach(System.out::println);


        User user2 = dao.getById(1);
        System.out.println(user2.toString());
        long id=4;
        dao.delete(id);
    }
}
