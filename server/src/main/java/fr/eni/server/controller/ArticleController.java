package fr.eni.server.controller;

import fr.eni.server.bo.Article;
import fr.eni.server.dto.ArticleDetailDto;
import fr.eni.server.security.services.UserDetailsImpl;
import fr.eni.server.services.ArticleServiceImpl;
import fr.eni.server.services.CategoryServiceImpl;
import fr.eni.server.services.UserService;
import fr.eni.server.services.WithDrawalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    private ArticleServiceImpl articleService;

    @Autowired
    private CategoryServiceImpl categoryService;

    @Autowired
    private UserService userService;

    @Autowired
    private WithDrawalService withdrawalService;

    @GetMapping("/all")
    public ResponseEntity<List<Article>> getAllArticles() {
        List<Article> articles = articleService.getAll();
        return ResponseEntity.ok(articles);
    }

    @PostMapping
    public ResponseEntity<Article> createNewArticle(@RequestBody Article article, Authentication auth) {
        UserDetailsImpl user = (UserDetailsImpl) auth.getPrincipal();
        article.setUserId(user.getId());
        
        articleService.createNew(article);
        System.out.println("Article created" + article);
        return ResponseEntity.created(URI.create("api/articles/")).body(article);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleDetailDto> getOneArticle(@PathVariable(value = "id") long id) {
//        try {
            System.out.println("id" + id);
            Article article = articleService.getOne(id);
            System.out.println("Found article" + article);
            ArticleDetailDto articleDetailDto = ArticleDetailDto.build(article);
            articleDetailDto.setCategory(categoryService.getOne(article.getIdCategory()).getLibelle());
            articleDetailDto.setSellerName(userService.getOne(article.getUserId()).getFirstName());
            articleDetailDto.setWithdrawal(withdrawalService.getOne(article.getId()));

            return ResponseEntity.ok(articleDetailDto);
//        } catch (EmptyResultDataAccessException e) {
//            System.out.println("Article not found" + e);
//            return ResponseEntity.notFound().build();
//        }
    }
}
