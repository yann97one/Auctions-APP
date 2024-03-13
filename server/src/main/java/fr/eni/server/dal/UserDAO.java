package fr.eni.server.dal;

import fr.eni.server.bo.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDAO {
    Optional<User> findByUsername(String username);
    Optional<User> findById(String id);
    Boolean existsByUsername(String username);
}