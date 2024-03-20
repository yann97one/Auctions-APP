interface Auction {
    id: number;
    title: string;
    amount: number;
    sellerPseudo: string;
    article: Article;
}

interface AuctionCreation {
    title: string;
    amount: number;
    sellerPseudo: string;
    article: Article;
}

interface Article {
    id: number;
    name: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    image: string | null;
    initialPrice: number;
    sellPrice: number;
    userId: number;
    idCategory: number;
}

export type {Auction, Article, AuctionCreation};
