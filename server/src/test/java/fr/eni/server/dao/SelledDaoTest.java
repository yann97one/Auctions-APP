package fr.eni.server.dao;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import fr.eni.server.bo.Role;
import fr.eni.server.bo.Selled;
import fr.eni.server.dal.SelledDAO;
import fr.eni.server.dal.UserDAO;
import net.bytebuddy.asm.Advice;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import fr.eni.server.bo.User;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@SpringBootTest
class SelledDaoTest {
    @Autowired
    SelledDAO dao;

    @Test
    @Transactional
    void contextLoads() {
        LocalDate date = LocalDate.of(2024, 3, 2);
        LocalDate endDate = LocalDate.of(2024, 3, 24);
        Selled selled = new Selled("nomtest", "desc", date, endDate,10,10,1,1);
        dao.create(selled);
        List<Selled> lst = dao.getAll();
        lst.forEach(System.out::println);
        Selled selled1 = dao.getById(2);
        System.out.println(selled1.toString());
        long id=4;
        dao.delete(id);
        List<Selled> lst2 = dao.getByArticleNameAndCategory("nom","test");
        lst2.forEach(System.out::println);
    }
}