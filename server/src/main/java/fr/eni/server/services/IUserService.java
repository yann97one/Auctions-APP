package fr.eni.server.services;

import fr.eni.server.bo.User;
import fr.eni.server.dto.CredentialsDTO;
import fr.eni.server.dto.SignUpDto;
import fr.eni.server.dto.UserDto;

import java.util.Optional;

public interface IUserService extends IService {
    //User findByLogin(String email, String password);

    UserDto register(SignUpDto user);

    User getByEmail(String email);

    Optional<User> verifyIfUserExist(String email);
    UserDto login(CredentialsDTO credentialsDTO);
}
