import {lazy} from "react";
import {ReactRoute} from "./types";

export const AUCTIONS_ROUTES: ReactRoute[] = [
    {
        path: "/create-auction",
        component: lazy(() => import("@components/Auctions/AuctionCreation")),
        roles: [],
    },
];
