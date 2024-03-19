package fr.eni.server.dto;

public record SignUpDto(String password, String pseudo, String email, String firstName, String lastName, String city,
                        String phoneNumber, String zipCode, String road) {
}
