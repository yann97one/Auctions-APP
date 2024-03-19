package fr.eni.server.services;

public interface IService<T> {
    void createNew(T obj);

    void deleteOne(long id);

    T getOne(long Id);


}
