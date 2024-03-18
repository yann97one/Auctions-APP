import Datepicker from "../shared/Datepicker";
import {useNavigate} from "react-router-dom";

function AuctionCreation() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-1/3">
            </div>
            <div className="flex flex-col w-96">
                <form>
                    <label htmlFor="Article"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Article :</label>
                    <input type="text" id="Article"
                           className="shadow-sm max-w-sm my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Description :
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="block max-w-sm my-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={""}
                    />
                    <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Catégorie :
                    </label>
                    <select
                        id="countries"
                        className="bg-gray-50 max-w-sm my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Choisir une catégorie</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Ameublement">Ameublement</option>
                        <option value="Vêtement">Vêtement</option>
                        <option value="Sport&loisirs">Sport & loisirs</option>
                    </select>

                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                    >
                        Photo de l'article :
                    </label>

                    <label htmlFor="file-input" className="sr-only">
                        Choose file
                    </label>
                    <input
                        type="file"
                        name="file-input"
                        id="file-input"
                        className="block max-w-sm w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0 file:hover:bg-gray-100
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                    />
                    <p
                        className="mt-1 text-sm mb-2 text-gray-500 dark:text-gray-300"
                        id="file_input_help"
                    >
                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>


                    <label htmlFor="MaP"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mise à prix :</label>
                    <input type="number" id="MaP"
                           className="shadow-sm max-w-sm my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>

                    <div className="relative max-w-xs">
                        <label htmlFor="StartAuction"
                               className="block my-2 text-sm font-medium text-gray-900 dark:text-white">
                            Début de l'enchère :</label>
                        <div className="absolute my-2 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        </div>
                        <Datepicker/>
                    </div>

                    <div className="relative max-w-xs">
                        <label htmlFor="EndAuction"
                               className="block my-2 text-sm font-medium text-gray-900 dark:text-white">
                            Fin de l'enchère :</label>
                        <div className="absolute my-2 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                        </div>
                        <Datepicker/>
                    </div>

                    <br></br>

                    <div className="flex flex-col justify-center py-2 lg:py-0">
                        <div
                            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-2 space-y-4 md:space-y-2 sm:p-5">
                                <h6 className="text-xl font-medium text-gray-900 dark:text-white">Retrait</h6>
                                <label htmlFor="Rue"
                                       className="block text-sm font-medium text-gray-900 dark:text-white">
                                    Rue :</label>
                                <input type="text" id="Rue"
                                       className="shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       required/>
                                <label htmlFor="Cp"
                                       className="block  text-sm font-medium text-gray-900 dark:text-white">
                                    Code postal :</label>
                                <input type="text" id="Cp"
                                       className="shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       required/>
                                <label htmlFor="Ville"
                                       className="block text-sm font-medium text-gray-900 dark:text-white">
                                    Ville :</label>
                                <input type="text" id="Ville"
                                       className="shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                       required/>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="sm:w-1/3 px-2">
                            <button type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Créer
                            </button>
                        </div>
                        <div className="sm:w-1/3 px-2">
                            <button onClick={() => navigate('/')}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Annuler
                            </button>
                        </div>
                        <div className="sm:w-1/3 px-2">
                            <button onClick={() => navigate('/')}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Annuler
                                la vente
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuctionCreation;