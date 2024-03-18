//import {useNavigate} from "react-router-dom";

import {LoginCredentials} from "../../api/loginService/types";
import {useState} from "react";
import {apiClient} from "../../api";
import {useNavigate} from "react-router-dom";
import useUserStore from "../../store/userStore";

const INITIAL_STATE: LoginCredentials = {
    email: "",
    password: ""

}

function UserLogin() {
    const navigate = useNavigate();
    const {setUser, getUser} = useUserStore();
    const [credentials, setCredentials] = useState(INITIAL_STATE);

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()
        try {
            const user = await apiClient.auth.authUser(credentials)
            setUser(user);
            localStorage.setItem("auth_token", user.token);
            console.log(getUser())
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Identifiant
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={(event) => setCredentials({...credentials, email: event.target.value})}
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@gmail.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={(event) => setCredentials({...credentials, password: event.target.value})}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"

                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="remember"
                                        className="text-gray-500 dark:text-gray-300"
                                    >
                                        Se souvenir de moi
                                    </label>
                                </div>
                            </div>
                            <a
                                href="/register"
                                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Mot de passe oublié?
                            </a>
                        </div>
                        <button
                            type="submit"
                            onClick={onSubmit}
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Connexion
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Vous n'avez pas de compte?{" "}
                            <a
                                href="/register"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                S'inscrire
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default UserLogin;