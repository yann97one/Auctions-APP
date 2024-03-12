import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {ReactRoute, Role} from "@/components/router/types.ts";
import {REDIRECT_ROUTES} from "@/components/router/constants.ts";

interface GuardedRouteProps {
    /**
     * Permission check for route
     * @default false
     */
    isRouteAccessible?: boolean;
    /**
     * Route to be redirected to
     * @default '/'
     */
    redirectRoute?: string;
}

const GuardedRoute = ({
                          isRouteAccessible = false,
                          redirectRoute = '/',
                      }: GuardedRouteProps): JSX.Element =>
    isRouteAccessible ? <Outlet/> : <Navigate to={redirectRoute} replace/>;

const SingleRoute = (route: ReactRoute, role: Role) => {
    const {path} = route;
    const redirectRoute = REDIRECT_ROUTES[role];

    return (
        <Route
            key={path}
            element={
                <GuardedRoute
                    isRouteAccessible={route.roles.includes(role)}
                    redirectRoute={redirectRoute}
                />
            }
        >
            <Route key={path} path={path} element={<route.component/>}/>
        </Route>
    );
};

const RenderRoutes = (routes: ReactRoute[], role: Role) => (
    <Routes>
        {routes.map((route) => SingleRoute(route, role))}
    </Routes>
);

export {RenderRoutes, SingleRoute}