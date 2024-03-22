package fr.eni.server.controller;


import fr.eni.server.bo.Category;
import fr.eni.server.dto.CategoryDto;
import fr.eni.server.services.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryServiceImpl categoryService;

    @PreAuthorize("hasAuthority(Role.ADMIN)")
    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAll());
    }

    @PreAuthorize("hasAuthority(Role.ADMIN)")
    @PutMapping("/update/{id}")
    public ResponseEntity<Category> updateCategory(@RequestBody CategoryDto categoryDto, @PathVariable(value = "id") long id) {
        Category category = Category.build(categoryDto);
        category.setId(id);

        categoryService.update(category);
        return ResponseEntity.ok(category);
    }

    @PreAuthorize("hasAuthority(Role.ADMIN)")
    @PostMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable(value = "id") long id) {
        categoryService.deleteOne(id);
        return ResponseEntity.ok().build();
    }


    @PreAuthorize("hasAuthority(Role.ADMIN)")
    @PostMapping("/create")
    public ResponseEntity<Category> createCategory(@RequestBody CategoryDto category) {
        categoryService.createNew(Category.build(category));
        return ResponseEntity.ok(Category.build(category));
    }
}
