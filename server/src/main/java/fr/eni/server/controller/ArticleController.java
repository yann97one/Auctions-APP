package fr.eni.server.controller;

import fr.eni.server.bo.Article;
import fr.eni.server.services.ArticleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    private ArticleServiceImpl articleService;

    @GetMapping("/all")
    public ResponseEntity<List<Article>> getAllArticles() {
        List<Article> articles = articleService.getAll();
        return ResponseEntity.ok(articles);
    }

    @GetMapping("{id}")
    public ResponseEntity<Article> getOneArticle(@PathVariable(value="id") long id) {
        try{

        Article article = articleService.getOne(id);
        return ResponseEntity.ok(article);
        }catch(EmptyResultDataAccessException e){
            return ResponseEntity.notFound().build();
        }
    }
}
