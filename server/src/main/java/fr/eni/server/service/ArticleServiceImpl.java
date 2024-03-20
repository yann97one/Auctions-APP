package fr.eni.server.service;

import fr.eni.server.bo.Selled;
import fr.eni.server.dal.SelledDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    SelledDAO dao;
    @Override
    public List<Selled> listAllSelled() {
        List<Selled> lst = dao.getAll();
        return lst;
    }

    @Override
    public String createArticle(Selled selled) {
        dao.create(selled);
        return null;
    }

    @Override
    public String deleteArticle(long id) {
        dao.delete(id);
        return null;
    }

    @Override
    public Selled findById(long id) {
        Selled selled = dao.getById(id);
        return selled;
    }

    @Override
    public List<Selled> listMySell(long id) {
        List<Selled> lst = dao.listMySell(id);
        return lst;
    }
}