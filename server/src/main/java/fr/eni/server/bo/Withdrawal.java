package fr.eni.server.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Withdrawal implements Serializable {
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
