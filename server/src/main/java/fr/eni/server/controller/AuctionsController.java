package fr.eni.server.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import fr.eni.server.bo.Auctions;
import fr.eni.server.bo.User;
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


    @RequestMapping("/create")
    @PostMapping()
    public ResponseEntity<String> createAuction(@RequestBody String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Auctions auctionsData = objectMapper.readValue(json, Auctions.class);
            String str = auctionsService.createAuctions(auctionsData);
            if (str != null) {
                return ResponseEntity.ok("Enchère trop basse");
            }
            else{
                return ResponseEntity.ok("Auction created successfully");
            }
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().body("Invalid JSON format"+e.getMessage());
        }
    }
    @RequestMapping("/Login")
    @PostMapping()
    public ResponseEntity<String> Login() {
        String user = "User Data"; // Replace this with actual data or a model object
        return ResponseEntity.ok(user);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> DeleteAuction(@PathVariable("id") Long id) {
        try {
            auctionsService.deleteAuctions(id);
            String response = "Delete auction ok";
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid JSON format");
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<String> getAuctionById (@PathVariable("id") Long id) throws Exception {
        try {
            Auctions auctionData = auctionsService.findById(id);
            ObjectMapper objectMapper = new ObjectMapper();
            String json = objectMapper.writeValueAsString(auctionData);
            System.out.println(json);
            return ResponseEntity.ok(json);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Wrong id auctions");
        }
    }
}


