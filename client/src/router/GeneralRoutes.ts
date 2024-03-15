import {ReactRoute} from "./types";
import {lazy} from 'react';

export const GENERAL_ROUTES: ReactRoute[] = [
    {
        path: "/",
        component: lazy(() => import("../components/Home/Home")),
        roles: [],
    }
]