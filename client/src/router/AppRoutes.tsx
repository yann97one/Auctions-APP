import {GENERAL_ROUTES} from "./GeneralRoutes";
import {AUCTIONS_ROUTES} from "./AuctionsRoutes";
import {ADMIN_ROUTES} from "./AdminRoutes";
import {AUTH_ROUTES} from "./UnprotectedRoutes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../components/shared/NotFound";


function AppRoutes() {

    const protectedRoutes = [
        ...GENERAL_ROUTES,
        ...AUCTIONS_ROUTES,
        ...ADMIN_ROUTES
    ];

    return (
        <BrowserRouter>
            <Routes>
                {AUTH_ROUTES.map((element) => {
                    return (
                        <Route key={element.path} path={element.path} element={<element.component/>}/>
                    )
                })}
                {protectedRoutes.map((element) => {
                    return (
                        <Route key={element.path} path={element.path} element={<element.component/>}
                        />
                    )
                })}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;