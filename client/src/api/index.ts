import auth from "./loginService";
import user from "./userService";
import auctions from "./auctionsService";
import articles from "./articleService";

export const apiClient = {
    auth,
    user,
    auctions,
    articles
};
