import {useNavigate} from "react-router-dom";

function ViewProfile () {

    const navigate = useNavigate();


    return (
        <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Pseudo :</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Nom :</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Prénom</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email :</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Téléphone :</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Rue :</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Code postal :</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Prénom"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Ville :</label>
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="Nom"
                                       className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    aaaaaaaaaaaaaa</label>
                            </div>
                        </div>
                    </div>

                </div>
                <button onClick={() => navigate('/')}
                        className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier
                </button>
            </div>
        </div>
    )
}

export default ViewProfile;