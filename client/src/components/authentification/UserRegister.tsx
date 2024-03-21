import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {RegisterCredentials} from "../../api/loginService/types";
import {apiClient} from "../../api";
import {useTranslation} from "react-i18next";

const INIT_REGISTER_INFO: RegisterCredentials = {
    email: '',
    pseudo: '',
    road: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
    zipCode: ''
}

function UserRegister() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [registerCredentials, setRegisterCredentials] = useState<RegisterCredentials>(INIT_REGISTER_INFO)
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        try {
            event.preventDefault();
            await apiClient.auth.registerUser(registerCredentials)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form className="max-w-sm mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {t("register.name")}</label>
                                <input type="text" id="Prénom"
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           firstName: event.target.value
                                       })}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       placeholder={t("register.name")} required/>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {t("register.firstname")}</label>
                                <input type="text" id="Nom"
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           lastName: event.target.value
                                       })}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       placeholder={t("register.firstname")} required/>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="pseudo"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {t("register.pseudo")}</label>
                            <input type="text" id="pseudo"
                                   onChange={(event) => setRegisterCredentials({
                                       ...registerCredentials,
                                       pseudo: event.target.value
                                   })}
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                   placeholder={t("register.pseudo")} required/>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {t("register.email")}</label>
                                <input type="email" id="email"
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           email: event.target.value
                                       })}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       placeholder="name@gmail.com" required/>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="telephone"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Téléphone</label>
                                <input type="text" id={t("register.phone")}
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           phoneNumber: event.target.value
                                       })}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       placeholder="06 06 06 06 06" required/>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Rue"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {t("register.road")}</label>
                            <input type="text" id="Rue"
                                   onChange={(event) => setRegisterCredentials({
                                       ...registerCredentials,
                                       road: event.target.value
                                   })}
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                   placeholder="8 rue de la poterie" required/>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Code postal"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {t("register.zip")}</label>
                                <input type="text" id="Code postal"
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           zipCode: event.target.value
                                       })}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       placeholder="35 000" required/>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Ville"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {t("register.city")}</label>
                                <input type="text" id="Ville"
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           city: event.target.value
                                       })}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       placeholder="Rennes" required/>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {t("register.password")}</label>
                            <input type="password" id="password"
                                   placeholder="••••••••"
                                   onChange={(event) => setRegisterCredentials({
                                       ...registerCredentials,
                                       password: event.target.value
                                   })}
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                   required/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="repeat-password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmation</label>
                            <input type="password" id="repeat-password"
                                   placeholder="••••••••"
                                   onChange={(event) => setRegisterCredentials({
                                       ...registerCredentials,
                                       repeatPassword: event.target.value
                                   })}
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                   required/>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <button type="submit"
                                        onClick={handleSubmit}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("register.create")}
                                </button>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <button onClick={() => navigate('/')}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("register.cancel")}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserRegister;