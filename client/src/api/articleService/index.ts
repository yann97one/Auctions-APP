import {JwtPayload} from "@api/loginService/types";
import http from "@/axios_helper";
import {Article, ArticleCreation} from "@api/articleService/types";

export default {
    createArticle(article: ArticleCreation): Promise<JwtPayload> {
        return http.request("post", "/articles", article)
    },
    getArticles(): Promise<Article[]> {
        return http.request("get", "/articles/all")
    }

}