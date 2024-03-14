package fr.eni.server.services;

import fr.eni.server.bo.User;
import fr.eni.server.dto.CredentialsDTO;
import fr.eni.server.dto.UserDto;

public interface IUserService extends IService {
    //User findByLogin(String email, String password);

    void register(User user);

    UserDto login(CredentialsDTO credentialsDTO);
}
