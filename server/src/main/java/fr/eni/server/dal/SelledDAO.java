package fr.eni.server.dal;

import fr.eni.server.bo.Selled;
import java.util.List;

public interface SelledDAO extends Dao<Selled>{
    List<Selled> getByArticleNameAndCategory(String article_name, String libelle);

    int updatePrice(long id_article, long price);

    List<Selled> listMySell(long id_user);
}
