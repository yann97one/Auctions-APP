package fr.eni.server.mapper;

import fr.eni.server.bo.User;
import fr.eni.server.dto.SignUpDto;
import fr.eni.server.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    
    UserDto toUserDto(User user);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "role", ignore = true)
    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto userDto);

}
