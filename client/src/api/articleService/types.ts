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

interface ArticleWithDrawal {
  idArticle: number;
  road: string;
  zip: string;
  city: string;
}

interface ArticleDetail {
  name: string;
  description: string;
  image: string;
  category: string;
  sellPrice: number;
  initialPrice: number;
  endDate: string;
  withdrawal: ArticleWithDrawal;
  sellerName: string;
}

interface Article extends ArticleCreation {
  id: number;
}

export type { Article, ArticleCreation, ArticleDetail };
