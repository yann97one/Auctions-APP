package fr.eni.server.service;

import fr.eni.server.bo.Auctions;
import fr.eni.server.bo.User;
import fr.eni.server.dal.AuctionsDAO;
import fr.eni.server.dal.AuctionsDaoImpl;
import fr.eni.server.dal.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionsServiceImpl implements AuctionsService {

    @Autowired
    AuctionsDAO dao;


    @Override
    public List<Auctions> listAllAuctions() {
        List<Auctions> lst = dao.getAll();
        return lst;
    }
}