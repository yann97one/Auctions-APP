import {Article, ArticleCreation} from "@api/articleService/types";

interface Auction {
    id: string;
    amount: number;
    date: Date;
    sellerPseudo: string;
    article: Article;
}

interface IAuctionCreation {
    date: Date;
    amount: number;
    article: ArticleCreation;
}


export type {Auction, IAuctionCreation,};
