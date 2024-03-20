package fr.eni.server.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.eni.server.bo.Selled;
import fr.eni.server.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/articles")
public class ArticleController {

    private final ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping()
    public ResponseEntity<String> listAll() throws JsonProcessingException {
        List<Selled> articleData = articleService.listAllSelled();
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonData = objectMapper.writeValueAsString(articleData);
        return ResponseEntity.ok(jsonData);
    }


    @RequestMapping("/create")
    @PostMapping()
    public ResponseEntity<String> create(@RequestBody String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Selled selledData = objectMapper.readValue(json, Selled.class);
            articleService.createArticle(selledData);
            return ResponseEntity.ok("Auction created successfully");
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().body("Invalid JSON format" + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> DeleteSelled(@PathVariable("id") Long id) {
        try {
            articleService.deleteArticle(id);
            String response = "Delete auction ok";
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid JSON format");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getSelledById(@PathVariable("id") Long id) throws Exception {
        try {
            Selled articleData = articleService.findById(id);
            ObjectMapper objectMapper = new ObjectMapper();
            String json = objectMapper.writeValueAsString(articleData);
            System.out.println(json);
            return ResponseEntity.ok(json);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Wrong id Selled");
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<String> getMySell(@PathVariable("id") Long id) throws JsonProcessingException {
        List<Selled> articleData = articleService.listMySell(id);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonData = objectMapper.writeValueAsString(articleData);
        return ResponseEntity.ok(jsonData);
    }
}


