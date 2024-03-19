import {useEffect, useState} from 'react';
import logo from '../../assets/eni-logo.png';
import {getTokenFromStorage, getTokenPayload} from "../../services/localStorage";

interface Props {
    extraItems?: NavBarItem[];
}

function NavBar(props: Props) {
    const token = getTokenFromStorage();
    const {extraItems} = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const user = getTokenPayload(token!)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const authenticatedMenuItems: NavBarItem[] = [
        {
            href: `profile/${user?.id}`,
            itemLabel: 'Mon profil',
        },
        {
            href: '/logout',
            itemLabel: 'Se déconnecter',
        }
    ]

    const unauthenticatedMenuItems: NavBarItem[] = [
        {
            href: '/login',
            itemLabel: 'Se connecter/S\'inscrire',
        },
    ]

    const menuItems: NavBarItem[] = []

    if (token != "undefined") menuItems.push(...authenticatedMenuItems);
    else menuItems.push(...unauthenticatedMenuItems);


    useEffect(() => {
        if (extraItems) {
            menuItems.push(...extraItems);
        }
        console.log(menuItems)
        console.log(user)
    }, [extraItems]);

    return (
        <nav className="bg-white border border-amber-100 dark:bg-gray-900 mb-16">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="text-lg font-semibold text-gray-900 dark:text-white">
                    <img src={logo} alt="ENI" className="w-100 h-100"/>
                </a>

                <button onClick={toggleMenu} type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded={isMenuOpen}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}
                                   className="'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'">{item.itemLabel}</a>
                            </li>
                        ))}

                        {/*<Link to={`/profile/${user?.id}`}>Mon Profil</Link>*/}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
