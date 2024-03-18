package fr.eni.server.bo;
import lombok.*;
import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Withdrawal {
    private int id;
    private String road;
    private String zip;
    private String city;

    public Withdrawal( String road, String city,String zip) {
        this.road = road;
        this.city = city;
        this.zip=zip;
    }
}
