package fr.eni.server.services;

import java.util.List;

public interface IService<T> {
    void createNew(T obj);

    void deleteOne(long id);

    T getOne(long Id);

    void update(T obj);
    List<T> getAll();

}
