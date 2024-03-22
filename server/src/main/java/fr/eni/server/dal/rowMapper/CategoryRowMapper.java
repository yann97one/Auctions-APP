package fr.eni.server.dal.rowMapper;

import fr.eni.server.bo.Category;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CategoryRowMapper implements RowMapper<Category> {
    @Override
    public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
        Category category = new Category();
        category.setId(rs.getLong("id_category"));
        category.setLibelle(rs.getString("libelle"));
        return category;
    }
}
