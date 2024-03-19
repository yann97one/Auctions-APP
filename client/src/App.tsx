import {Suspense, useEffect} from "react";
import AppRoutes from "./router/AppRoutes";
import NavBar from "./components/shared/NavBar";
import {useAppSelector} from "./store/hooks";

function App() {
    const currentUser = useAppSelector(state => state.user);
    const extraMenuItems: NavBarItem[] = []

    useEffect(() => {
        console.log(currentUser)

        extraMenuItems.push({
            href: '/profile',
            itemLabel: `Mon profil : ${currentUser.email}`,
        })

    }, [currentUser])

    return (
        <>
            <NavBar extraItems={extraMenuItems}/>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRoutes/>
            </Suspense>
        </>
    )
}

export default App
