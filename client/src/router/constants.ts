import {Role} from "@/components/router/types.ts";

export const ROOT = {
    PATH: "/",
    NAME: "Acceuil"
}

export const ROUTES = {
    HOME: ROOT,
    LOGIN: {
        PATH: "/login",
        NAME: "Connexion"
    },
    REGISTER: {
        PATH: "/register",
        NAME: "Inscription"
    },
    USER_AUCTIONS: {
        PATH: "/user-auctions",
        NAME: "Mes enchères"
    },
    CREATE_AUCTION: {
        PATH: "/user-auctions/create",
        NAME: "Créer une enchère"
    },
    AUCTION: {
        PATH: "/auction",
        NAME: "Enchère"
    },
    AUCTION_DETAIL: {
        PATH: "/auction/:id",
        NAME: "Detail de l'enchère"
    },
    AUCTION_DETAIL_WIN: {
        PATH: "/auction/:id",
        NAME: "Detail de l'enchère gagnée"
    },
    USER_CONFIGURATION: {
        PATH: "/configuration",
        NAME: "Configuration"
    },
    ADMIN_PANEL: {
        PATH: "/admin",
        NAME: "Panel admin"
    }
}

export const REDIRECT_ROUTES = {
    [Role.ADMIN]: ROUTES.ADMIN_PANEL,
    [Role.USER]: ROUTES.USER_CONFIGURATION,
}