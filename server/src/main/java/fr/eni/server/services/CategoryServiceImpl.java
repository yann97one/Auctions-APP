package fr.eni.server.services;

import fr.eni.server.bo.Category;
import fr.eni.server.dal.CategoryDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements ICategoryService {

    @Autowired
    private CategoryDaoImpl categoryDao;

    @Override
    public void createNew(Category category) {
        categoryDao.create(category);
    }

    @Override
    public void deleteOne(long id) {
        categoryDao.delete(id);
    }

    @Override
    public Category getOne(long Id) {
        return categoryDao.getById(Id);
    }

    @Override
    public void update(Category obj) {
        categoryDao.update(obj);
    }

    @Override
    public List<Category> getAll() {
        return categoryDao.getAll();
    }
}
