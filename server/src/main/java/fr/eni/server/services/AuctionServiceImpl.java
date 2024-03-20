package fr.eni.server.services;

import fr.eni.server.bo.Auction;
import fr.eni.server.dal.AuctionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionServiceImpl implements IAuctionService {
    @Autowired
    private AuctionDAO auctionDAO;




    @Override
    public void createNew(Auction auction) {
        auctionDAO.create(auction);
    }

    @Override
    public void deleteOne(long id) {
         auctionDAO.delete(id);
    }

    @Override
    public Auction getOne(long Id) {
        return auctionDAO.getById(Id);
    }

    @Override
    public List<Auction> getAll() {
        return auctionDAO.getAll();
    }
}
