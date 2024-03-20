import http from "../../axios_helper";
import {Auction, AuctionCreation} from "./type";

export default {
    getAuctionsList(): Promise<Auction[]> {
        return http.request("get", "/auctions/all");
    },
    getSingleAuction(id: number): Promise<Auction> {
        return http.request("get", `/auctions/${id}`);
    },
    getUserAuction(userId: number): Promise<Auction[]> {
        return http.request("get", `/auctions/${userId}`);
    },
    createAuction(auction: AuctionCreation): Promise<void> {
        return http.request("post", `/auctions`, auction);
    },
};
