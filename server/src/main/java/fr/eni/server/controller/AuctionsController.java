package fr.eni.server.controller;

import fr.eni.server.bo.Article;
import fr.eni.server.bo.Auction;
import fr.eni.server.bo.User;
import fr.eni.server.dto.ArticleDto;
import fr.eni.server.dto.AuctionDto;
import fr.eni.server.security.services.UserDetailsImpl;
import fr.eni.server.services.ArticleServiceImpl;
import fr.eni.server.services.AuctionServiceImpl;
import fr.eni.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.net.URI;
import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auctions")
public class AuctionsController {

    @Autowired
    private AuctionServiceImpl auctionService;

    @Autowired
    private ArticleServiceImpl articleService;

    @Autowired
    private UserService userService;

    //@PreAuthorize("hasAuthority('USER')")
    @GetMapping("/all")
    public ResponseEntity<List<AuctionDto>> getAllAuctions(Authentication auth) {


        List<Auction> auctions = auctionService.getAll();
        List<AuctionDto> auctionsToReturn = new ArrayList<>();

        for (Auction auction : auctions) {
            AuctionDto auctionDto = AuctionDto.build(auction);
            Article auctionArticle = articleService.getOne(auction.getIdArticle());
            auctionArticle.setImage(Base64.getEncoder().encodeToString(auctionArticle.getImage().getBytes()));
            auctionDto.setArticle(auctionArticle);
            auctionDto.setSellerPseudo(userService.getOne(auction.getIdUser()).getPseudo());
            auctionDto.setOver(auctionArticle.isAuctionOver());

            auctionsToReturn.add(auctionDto);
        }

        return ResponseEntity.ok(auctionsToReturn);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuctionDto> getSingleAuction(@PathVariable(value = "id") long id) {
        try {
            AuctionDto auction = AuctionDto.build(auctionService.getOne(id));
            Article article = articleService.getOne(auction.getId());
            auction.setArticle(article);
            auction.setOver(article.isAuctionOver());
            return ResponseEntity.ok(auction);

        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/add")
    public ResponseEntity<AuctionDto> addAuction(@RequestBody AuctionDto auctionDto, Authentication auth) {
        UserDetailsImpl userDetails = (UserDetailsImpl) auth.getPrincipal();


        Article article = new Article(
                auctionDto.getArticle().getName(),
                auctionDto.getArticle().getDescription(),
                auctionDto.getArticle().getBeginDate(),
                auctionDto.getArticle().getEndDate(),
                auctionDto.getArticle().getInitialPrice(),
                auctionDto.getArticle().getSellPrice(),
                userDetails.getId(),
                auctionDto.getArticle().getIdCategory(),
                auctionDto.getArticle().getImage()
        );

        System.out.println(article);
        articleService.createNew(article);

        System.out.println("Article enregistré : " + article);
        Auction auction = new Auction();
        auction.setAmount(auctionDto.getAmount());
        // auction.setIdArticle(articleService.getOne(article.getId()));
        auction.setDate(auctionDto.getDate());


        auction.setIdUser(userDetails.getId());
        System.out.println(auth.getPrincipal());
        System.out.println(auction);
        auctionService.createNew(auction);

        return ResponseEntity.created(URI.create("/api/auctions/" + auction.getId())).body(AuctionDto.build(auction));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<AuctionDto> updateAuction(@PathVariable(value = "id") long id, @RequestBody AuctionDto auctionDto) {
        Auction auction = auctionService.getOne(id);
        auction.setAmount(auctionDto.getAmount());
        auctionService.update(auction);
        return ResponseEntity.ok(AuctionDto.build(auction));
    }
}
