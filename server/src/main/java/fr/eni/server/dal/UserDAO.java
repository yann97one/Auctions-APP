package fr.eni.server.dal;

import java.util.List;

import fr.eni.server.bo.User;



public interface UserDAO {

    void create(User user);

    void connexion(String pseudoOuEmail,String password);


    List<String> getAll();
}
