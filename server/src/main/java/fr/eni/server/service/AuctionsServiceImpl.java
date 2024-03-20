package fr.eni.server.service;

import fr.eni.server.bo.Auctions;
import fr.eni.server.bo.User;
import fr.eni.server.dal.AuctionsDAO;
import fr.eni.server.dal.AuctionsDaoImpl;
import fr.eni.server.dal.SelledDAO;
import fr.eni.server.dal.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionsServiceImpl implements AuctionsService {

    @Autowired
    AuctionsDAO dao;

    @Autowired
    SelledDAO dao2;


    @Override
    public List<Auctions> listAllAuctions() {
        List<Auctions> lst = dao.getAll();
        return lst;
    }

    @Override
    public String createAuctions(Auctions auctions) {
        boolean bool =dao.verifyPrice(auctions);
        if(bool){
            dao.create(auctions);
            dao2.updatePrice(auctions.getId_article(),auctions.getAmount());
        }
        else{
            return "echec";
        }
        return null;
    }

    @Override
    public String deleteAuctions(long id) {
        dao.delete(id);
        return null;
    }

    @Override
    public Auctions findById(long id) {
        Auctions auctions = dao.getById(id);
        return auctions;
    }
}