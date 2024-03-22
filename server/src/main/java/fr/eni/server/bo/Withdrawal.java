package fr.eni.server.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Withdrawal implements Serializable {
    private long idArticle;
    private String road;
    private String zip;
    private String city;


}
