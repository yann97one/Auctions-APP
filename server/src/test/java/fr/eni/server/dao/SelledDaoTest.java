package fr.eni.server.dao;

import fr.eni.server.bo.Selled;
import fr.eni.server.dal.SelledDAO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@SpringBootTest
class SelledDaoTest {
    @Autowired
    SelledDAO dao;

    @Test
    @Transactional
    void contextLoads() {

        Timestamp date = Timestamp.valueOf(LocalDate.of(2024, 3, 2).atStartOfDay());
        Timestamp endDate =Timestamp.valueOf(LocalDate.of(2024, 3, 24).atStartOfDay());
        Selled selled = new Selled("nomtest", "desc", date, endDate,10,10,1,1);
        dao.create(selled);
        List<Selled> lst = dao.getAll();
        lst.forEach(System.out::println);
        Selled selled2 = dao.getById(2);
        System.out.println(selled2.toString());
        dao.updatePrice(2,12);
        Selled selled1 = dao.getById(2);
        System.out.println(selled1.toString());
        long id=4;
        dao.delete(id);
        List<Selled> lst2 = dao.getByArticleNameAndCategory("nom","test");
        lst2.forEach(System.out::println);

        long id2=2;
        List<Selled> lst3= dao.listMySell(id2);
        lst3.forEach(System.out::println);


    }
}