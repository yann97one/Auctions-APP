export interface ArticleCreation {
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

export type {Article, ArticleCreation};