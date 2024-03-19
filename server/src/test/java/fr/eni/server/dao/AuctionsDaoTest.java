package fr.eni.server.dao;

import fr.eni.server.bo.Auctions;
import fr.eni.server.dal.AuctionsDAO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
class AuctionsDaoTest {
    @Autowired
    AuctionsDAO dao;
    @Test
    @Transactional
    void contextLoads() {



        LocalDateTime date = LocalDate.of(2024, 3, 2).atStartOfDay();
        Timestamp date2=	Timestamp.valueOf(date);
        Auctions auctions = new Auctions(100, 2, 1,date2 );
        dao.create(auctions);


        List<Auctions> lst = dao.getAll();
        lst.forEach(System.out::println);

        Auctions auctions1 = dao.getById(5);
        System.out.println(auctions1.toString());
        long id=5;
        dao.delete(id);

    }
}