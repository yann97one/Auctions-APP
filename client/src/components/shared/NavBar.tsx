import {useEffect, useState} from 'react';
import logo from '../../assets/eni-logo.png';
import i18n from "i18next";
import {useTranslation} from "react-i18next";

interface Props {
    extraItems?: NavBarItem[];
}

function NavBar(props: Props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const {extraItems} = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems: NavBarItem[] = [
        {
            href: '/login',
            itemLabel: 'Se connecter/S\'inscrire',
        }
    ]

    useEffect(() => {
        if (extraItems) {
            menuItems.push(...extraItems);
        }
    }, [extraItems]);
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (

        <nav className="bg-white border border-amber-100 dark:bg-gray-900 mb-16">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="/" className="text-lg font-semibold text-gray-900 dark:text-white">
                    <img src={logo} alt="ENI" className="w-100 h-100"/>
                </a>
                <div>
                    <button type="submit" onClick={() => changeLanguage('fr')}>Français /</button>
                    <button type="submit" onClick={() => changeLanguage('en')}> English</button>
                </div>

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
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
