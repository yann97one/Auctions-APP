interface Auction {
  id: string;
  amount: number;
  date: Date;
  sellerPseudo: string;
  article: Article;
}

interface AuctionCreation {
  title: string;
  amount: number;
  sellerPseudo: string;
}

interface ArticleCreation {
  name: string;
  description: string;
  beginDate: Date;
  endDate: Date;
  image: string | null;
  initialPrice: number;
  sellPrice: number;
  userId: string;
  idCategory: string;
}
interface Article extends ArticleCreation {
  id: number;
}

export type { Auction, Article, AuctionCreation, ArticleCreation };
