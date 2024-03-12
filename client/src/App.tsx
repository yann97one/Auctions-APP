import {Suspense} from "react";
import AppRoutes from "./router/AppRoutes";


function App() {


    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRoutes/>
            </Suspense>
        </>
    )
}

export default App
