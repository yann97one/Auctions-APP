import {ReactRoute} from "@/components/router/types.ts";
import {lazy} from "react";

export const routes: ReactRoute[] = [
    {
        path: "/",
        component: lazy(() => import("../home/Home")),
        roles: [],

    },

]