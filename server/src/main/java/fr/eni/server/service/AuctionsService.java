package fr.eni.server.service;

import fr.eni.server.bo.Auctions;
import fr.eni.server.bo.User;

import java.util.List;

public interface AuctionsService {
        List<Auctions> listAllAuctions();


        String createAuctions(Auctions auctions);
        String deleteAuctions(long id);

        Auctions findById(long id);

}

