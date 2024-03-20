package fr.eni.server.controller;

import fr.eni.server.bo.Auction;
import fr.eni.server.dto.AuctionDto;
import fr.eni.server.services.ArticleServiceImpl;
import fr.eni.server.services.AuctionServiceImpl;
import fr.eni.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
            auctionDto.setSellerEmail(userService.getOne(auction.getIdUser()).getEmail());
            auctionsToReturn.add(auctionDto);
        }

        return ResponseEntity.ok(auctionsToReturn);
    }
}
