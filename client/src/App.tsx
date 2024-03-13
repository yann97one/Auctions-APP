import {Suspense} from "react";
import AppRoutes from "./router/AppRoutes";
import NavBar from "./components/shared/NavBar";

function App() {


    return (
        <>
            <NavBar/>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRoutes/>
            </Suspense>
        </>
    )
}

export default App
