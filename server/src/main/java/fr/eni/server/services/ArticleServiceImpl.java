package fr.eni.server.services;

import fr.eni.server.bo.Article;
import fr.eni.server.dal.ArticleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements IArticleService{

    @Autowired
    private ArticleDao articleDao;

    @Override
    public void createNew(Article article) {
        articleDao.create(article);
    }

    @Override
    public void deleteOne(long id) {
        articleDao.delete(id);
    }

    @Override
    public Article getOne(long Id) {
        return articleDao.getById(Id);
    }

    @Override
    public void update(Article article) {
        articleDao.update(article);
    }

    @Override
    public List<Article> getAll() {
        return articleDao.getAll();
    }
}
