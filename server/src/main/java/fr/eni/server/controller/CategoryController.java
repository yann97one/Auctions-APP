package fr.eni.server.controller;


import fr.eni.server.bo.Category;
import fr.eni.server.services.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private  CategoryServiceImpl categoryService;

    @PreAuthorize("hasAuthority(Role.ADMIN)")
    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories() {
        return null;
    }
}
