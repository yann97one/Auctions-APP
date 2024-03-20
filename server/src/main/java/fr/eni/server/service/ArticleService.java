package fr.eni.server.service;

import fr.eni.server.bo.Auctions;
import fr.eni.server.bo.Selled;

import java.util.List;

public interface ArticleService {
        List<Selled> listAllSelled();


        String createArticle(Selled selled);
        String deleteArticle(long id);

        Selled findById(long id);

        List<Selled> listMySell(long id);
}

