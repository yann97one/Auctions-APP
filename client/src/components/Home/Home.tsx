import { Filter, FilterLog } from "@components/shared";
import { ArticleList } from "@components/auctions";
import { useEffect, useState } from "react";
import { apiClient } from "@/api";
import { Article } from "@api/articleService/types";

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  const getAuctions = async () => {
    const response = await apiClient.articles.getArticles();
    console.log(response);
    setArticles(response);
  };

  useEffect(() => {
    getAuctions();
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col  w-1/3">
        <div className="sticky top-12">
          <Filter articles={articles} setArticles={setArticles} />
          <FilterLog articles={articles} setArticles={setArticles} />
        </div>
      </div>
      <div className="flex flex-col w-2/3">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export default Home;
