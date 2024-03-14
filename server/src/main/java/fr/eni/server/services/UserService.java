package fr.eni.server.services;

import fr.eni.server.bo.User;
import fr.eni.server.dal.UserDaoImpl;
import fr.eni.server.dto.CredentialsDTO;
import fr.eni.server.dto.UserDto;
import fr.eni.server.exceptions.AppException;
import fr.eni.server.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService implements IUserService {


    private final UserDaoImpl userDao;

    private final PasswordEncoder passwordEncoder;

    private final UserMapper userMapper;

    @Override
    public void createNew(Object obj) {

    }

    @Override
    public void deleteOne(long id) {

    }

    @Override
    public Object getOne(long Id) {
        return null;
    }

//    @Override
//    public User findByLogin(String email, String password) {
//        return;
//    }

    @Override
    public void register(User user) {
        Optional<User> userOptional = Optional.ofNullable(userDao.findByLogin(user.getEmail(), user.getPseudo()));

        if (userOptional.isPresent()) {
            throw new AppException("User already exist", HttpStatus.BAD_REQUEST);
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDao.create(user);
    }

    @Override
    public UserDto login(CredentialsDTO credentialsDTO) {
        User user = this.userDao.findByLogin(credentialsDTO.getEmail(), credentialsDTO.getPassword());

        if (passwordEncoder.matches(credentialsDTO.getPassword(), user.getPassword())) {
            return userMapper.toUserDto(user);
        }
        
        throw new AppException("Password not correct", HttpStatus.BAD_REQUEST);
    }
}
