package fr.eni.server.dal;

import fr.eni.server.bo.Category;
import fr.eni.server.dal.rowMapper.CategoryRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryDaoImpl implements CategoryDao {
    private static final String SELECT_ALL_CATEGORIES = "SELECT * FROM CATEGORIES";

    private static final String SELECT_CATEGORY_BY_ID = "SELECT * FROM CATEGORIES WHERE id = :id";

    private static final String DELETE_CATEGORY = "DELETE FROM CATEGORIES WHERE id = :id";

    private static final String UPDATE_CATEGORY = "UPDATE CATEGORIES SET name = ? WHERE id = :id";

    private static final String INSERT_CATEGORY = "INSERT INTO CATEGORIES (name) VALUES (:name)";

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public void create(Category obj) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("name", obj.getLibelle());
        jdbcTemplate.update(INSERT_CATEGORY, namedParameters);
    }

    @Override
    public void delete(Long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", id);
        jdbcTemplate.update(DELETE_CATEGORY, namedParameters);
    }

    @Override
    public List<Category> getAll() {
        return jdbcTemplate.query(SELECT_ALL_CATEGORIES, new CategoryRowMapper());
    }

    @Override
    public void update(Category obj) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("name", obj.getLibelle());
        namedParameters.addValue("id", obj.getId());
        jdbcTemplate.update(UPDATE_CATEGORY, namedParameters);
    }

    @Override
    public Category getById(long userId) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", userId);
        return jdbcTemplate.queryForObject(SELECT_CATEGORY_BY_ID, namedParameters, new CategoryRowMapper());
    }
}
