package fr.eni.server.controller;

import fr.eni.server.bo.Article;
import fr.eni.server.bo.Auction;
import fr.eni.server.dto.AuctionDto;
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

import java.util.ArrayList;
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
            auctionDto.setArticle(articleService.getOne(auction.getId()));
            auctionDto.setSellerPseudo(userService.getOne(auction.getIdUser()).getEmail());
            auctionsToReturn.add(auctionDto);
        }

        return ResponseEntity.ok(auctionsToReturn);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuctionDto> getSingleAuction(@PathVariable(value = "id") long id) {
        try {
            AuctionDto auction = AuctionDto.build(auctionService.getOne(id));
            return ResponseEntity.ok(auction);

        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }

    }
}
