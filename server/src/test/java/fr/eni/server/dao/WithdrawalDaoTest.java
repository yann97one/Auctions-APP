package fr.eni.server.dao;


import fr.eni.server.bo.Withdrawal;
import fr.eni.server.dal.WithdrawalDAO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@SpringBootTest
class WithdrawalDaoTest {
    @Autowired
    WithdrawalDAO dao;

    @Test
    @Transactional
    void contextLoads() {
        Withdrawal withdrawal = new Withdrawal(2,"100", "1", "1" );
        dao.create(withdrawal);
        List<Withdrawal> lst = dao.getAll();
        lst.forEach(System.out::println);
        Withdrawal withdrawal1 = dao.getById(2);
        System.out.println(withdrawal1.toString());
        long id=2;
        dao.delete(id);
    }
}