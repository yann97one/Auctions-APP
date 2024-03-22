import { JwtPayload } from "@api/loginService/types";
import http from "@/axios_helper";
import {
  Article,
  ArticleCreation,
  ArticleDetail,
} from "@api/articleService/types";

export default {
  createArticle(article: ArticleCreation): Promise<JwtPayload> {
    return http.request("post", "/articles", article);
  },
  getArticles(): Promise<Article[]> {
    return http.request("get", "/articles/all");
  },

  getArticleById(id: string): Promise<ArticleDetail> {
    return http.request("get", `/articles/${id}`);
  },
};
