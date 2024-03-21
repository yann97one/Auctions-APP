CREATE DATABASE Auctions;
USE Auctions;

CREATE TABLE Auctions (
                          id_auctions INT AUTO_INCREMENT PRIMARY KEY,
                          auctions_date DATETIME NOT NULL,
                          auctions_amount INT NOT NULL,
                          id_article INT NOT NULL,
                          id_user INT NOT NULL
);

CREATE TABLE Categories (
                            id_category INT AUTO_INCREMENT PRIMARY KEY,
                            libelle VARCHAR(30) NOT NULL
);

CREATE TABLE Selled_Articles (
                                 id_article INT AUTO_INCREMENT PRIMARY KEY,
                                 article_name VARCHAR(30) NOT NULL,
                                 description VARCHAR(300) NOT NULL,
                                 auctions_begin_date DATE NOT NULL,
                                 auction_end_date DATE NOT NULL,
                                 initial_price INT,
                                 sell_price INT,
                                 user_id INT NOT NULL,
                                 id_category INT NOT NULL
);

CREATE TABLE Users (
                       id_user INT AUTO_INCREMENT PRIMARY KEY,
                       pseudo VARCHAR(30) NOT NULL,
                       firstname VARCHAR(30) NOT NULL,
                       lastname VARCHAR(30) NOT NULL,
                       email VARCHAR(50) NOT NULL,
                       phone VARCHAR(15),
                       road VARCHAR(30) NOT NULL,
                       zip VARCHAR(10) NOT NULL,
                       city VARCHAR(50) NOT NULL,
                       password VARCHAR(500) NOT NULL,
                       credit INT,
                       role VARCHAR(15) NOT NULL
);

CREATE TABLE Withdrawal (
                            id_article INT NOT NULL PRIMARY KEY,
                            road VARCHAR(30) NOT NULL,
                            zip VARCHAR(15) NOT NULL,
                            city VARCHAR(30) NOT NULL
);

ALTER TABLE Auctions
    ADD CONSTRAINT encheres_no_article_fk FOREIGN KEY (id_article) REFERENCES Selled_Articles(id_article),
ADD CONSTRAINT encheres_utilisateur_fk FOREIGN KEY (id_user) REFERENCES Users(id_user);

ALTER TABLE Selled_Articles
    ADD CONSTRAINT articles_vendus_categories_fk FOREIGN KEY (id_category) REFERENCES Categories(id_category),
ADD CONSTRAINT ventes_utilisateur_fk FOREIGN KEY (user_id) REFERENCES Users(id_user);

ALTER TABLE Withdrawal
    ADD CONSTRAINT retrait_article_fk FOREIGN KEY (id_article) REFERENCES Selled_Articles(id_article);
