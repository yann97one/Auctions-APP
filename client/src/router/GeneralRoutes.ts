import {ReactRoute} from "./types";
import {lazy} from 'react';

export const GENERAL_ROUTES: ReactRoute[] = [
    {
        path: "/login",
        component: lazy(() => import("../components/UserLogin")),
        roles: [],
    }
]