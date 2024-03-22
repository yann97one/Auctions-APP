import {lazy} from "react";

export const ADMIN_ROUTES = [
    {
        path: "/admin-panel",
        component: lazy(() => import("@components/Admin/index")),
        roles: ["ADMIN"],
    },

]