import {ReactRoute} from "./types";
import {lazy} from "react";

export const AUTH_ROUTES: ReactRoute[] = [
    {
        path: "/login",
        component: lazy(() => import("../components/authentification/UserLogin")),
        roles: [],
    },
    {
        path: "/register",
        component: lazy(() => import("../components/authentification/UserRegister")),
        roles: [],
    },
    {
        path: "/ccc",
        component: lazy(() => import("../components/Auctions/Auction")),
        roles: [],
    },
]
