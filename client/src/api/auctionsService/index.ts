import http from "../../axios_helper";
import { Auction } from "./type";

export default {
  getAuctionsList(): Promise<Auction[]> {
    return http.request("get", "/auctions/all");
  },
};
