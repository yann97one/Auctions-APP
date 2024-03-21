package fr.eni.server.services;

import fr.eni.server.bo.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryService{


    @Override
    public void createNew(Category obj) {

    }

    @Override
    public void deleteOne(long id) {

    }

    @Override
    public Category getOne(long Id) {
        return null;
    }

    @Override
    public void update(Category obj) {

    }

    @Override
    public List<Category> getAll() {
        return null;
    }
}
