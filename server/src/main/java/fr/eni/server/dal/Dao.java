package fr.eni.server.dal;

import java.util.List;

public interface Dao<T> {
    void create(T obj);

    void delete(Long id);

    List<T> getAll();

    void update(T obj);

    T getById(long userId);


}
