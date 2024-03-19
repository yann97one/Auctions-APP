package fr.eni.server.dal;

import fr.eni.server.bo.Article;

import java.util.List;

public interface ArticleDao extends Dao<Article>{
    List<Article> getByArticleNameAndCategory(String article_name, String libelle);
}
