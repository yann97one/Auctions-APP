package fr.eni.server.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import fr.eni.server.bo.Auctions;
import fr.eni.server.service.AuctionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/auctions")
public class AuctionsController {

    private final AuctionsService auctionsService;

    @Autowired
    public AuctionsController(AuctionsService auctionsService) {
        this.auctionsService = auctionsService;
    }

    @GetMapping()
    public ResponseEntity<String> listAllAuctions() throws JsonProcessingException {
        List<Auctions> autionsData= auctionsService.listAllAuctions();
        ObjectMapper objectMapper = new ObjectMapper();

// Convertissez votre liste en JSON
        String jsonData = objectMapper.writeValueAsString(autionsData);

// Retournez la réponse JSON
        return ResponseEntity.ok(jsonData);

    }
}


