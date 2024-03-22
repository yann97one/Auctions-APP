import { lazy } from "react";
import { ReactRoute } from "./types";

export const AUCTIONS_ROUTES: ReactRoute[] = [
  {
    path: "/create-auction",
    component: lazy(() => import("@/components/auctions/ArticleCreation")),
    roles: [],
  },
  {
    path: "auction/:id",
    component: lazy(() => import("@components/auctions/Auction")),
    roles: [],
  },
];
