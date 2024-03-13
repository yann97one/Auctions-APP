import {ReactRoute} from "./types";
import {lazy} from 'react';

export const GENERAL_ROUTES: ReactRoute[] = [
    {
        //TODO : faire la page d'acceuil et rediriger ici
        path: "/",
        component: lazy(() => import("../components/authentification/UserLogin")),
        roles: [],
    }
]