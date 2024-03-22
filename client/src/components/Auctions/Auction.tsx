import { useParams } from "react-router-dom";
import Bid from "./Bid";
import { apiClient } from "@/api";
import { useEffect, useState } from "react";
import { ArticleDetail } from "@/api/articleService/types";

function Auction() {
  const { id } = useParams();

  const [article, setArticle] = useState<ArticleDetail>();

  const [bid, setBid] = useState<number>(0);

  const getArticleDetails = async () => {
    const response = await apiClient.articles.getArticleById(id!);
    console.log(response);
    setArticle(response);
  };

  useEffect(() => {
    getArticleDetails();
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/3">
          <figure className="max-w-lg px-6">
            <img
              className="h-auto max-w-full rounded-lg items-center "
              src={
                article?.image != ""
                  ? article?.image
                  : "https://via.placeholder.com/150"
              }
              alt="image description"
            />
          </figure>
        </div>
        <div className="flex flex-col w-2/3">
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 "></div>
            <div className="md:w-1/4">
              <label
                htmlFor="Title"
                className="block mb-7 text-2xl font-medium text-gray-900 dark:text-white px-8 "
              >
                Détail vente
              </label>
            </div>
          </div>
          <label
            htmlFor="Article"
            className="block mb-7 text-lg font-medium text-gray-900 dark:text-white px-2 -mx-3 "
          >
            {article?.name}
          </label>

          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
              <label
                htmlFor="Description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description :
              </label>
            </div>
            <div className="md:w-1/3 px-2">
              <label
                htmlFor="DescriptionValue"
                className="overflow-hidden mb-2 text-sm font-medium text-gray-500 dark:text-white break-words"
              >
                {article?.description}
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
              <label
                htmlFor="Category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Catégorie
              </label>
            </div>
            <div className="md:w-1/3 px-2">
              <label
                htmlFor="CategoryValue"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                {article?.description}
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
              <label
                htmlFor="BestOffer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meilleure offre :
              </label>
            </div>
            <div className="md:w-1/3 px-2">
              <label
                htmlFor="BestOfferValue"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                {article?.sellPrice}
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
              <label
                htmlFor="StartPrice"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mise à prix :
              </label>
            </div>
            <div className="md:w-1/3 px-2">
              <label
                htmlFor="StartPriceValue"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                {article?.initialPrice}
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
              <label
                htmlFor="EndBid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fin de l'enchère :
              </label>
            </div>
            <div className="md:w-1/3 px-2">
              <label
                htmlFor="EndBidValue"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                {article?.endDate}
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
              <label
                htmlFor="Retrait"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Retrait :
              </label>
            </div>
            <div className="md:w-1/3 px-2">
              <label
                htmlFor="RetraitValue"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white break-words"
              >
                {article?.withdrawal.road} {article?.withdrawal.zip}{" "}
                {article?.withdrawal.city}
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
              <label
                htmlFor="Vendeur"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Vendeur :
              </label>
            </div>
            <div className="md:w-1/3 px-2">
              <label
                htmlFor="VendeurValue"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                {article?.sellerName}
              </label>
            </div>
          </div>
          <Bid setBid={setBid} bid={bid} />
        </div>
      </div>
    </div>
  );
}

export default Auction;
