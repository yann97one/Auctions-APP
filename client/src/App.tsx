import {Suspense, useEffect} from "react";
import AppRoutes from "./router/AppRoutes";
import NavBar from "./components/shared/NavBar";
import Loader from "./components/shared/Loader";
import {useUser} from "@/hooks/UserContext";
import {Role} from "@/router/types";

function App() {
    const extraMenuItems: NavBarItem[] = [];
    const {user} = useUser();

    switch (user?.role) {
        case Role.USER: {
            extraMenuItems.push(
                {
                    href: `profile/${user.id}`,
                    itemLabel: 'Mon profil',
                },
                {
                    href: '/logout',
                    itemLabel: 'Se déconnecter',
                },
            );
            break;
        }
        case Role.ADMIN: {
            extraMenuItems.push(
                {
                    href: `profile/${user.id}`,
                    itemLabel: 'Mon profil',
                },
                {
                    href: '/logout',
                    itemLabel: 'Se déconnecter',
                },
                {
                    href: '/admin',
                    itemLabel: 'Panneau Administatrateur'
                }
            );
            break;
        }
        default: {
            extraMenuItems.push(
                {
                    href: '/login',
                    itemLabel: 'Se connecter/S\'inscrire',
                },
            );
            break;

        }

    }

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <>
            <NavBar extraItems={extraMenuItems}/>
            <Suspense fallback={<Loader/>}>
                <AppRoutes/>
            </Suspense>
        </>
    );
}

export default App;
