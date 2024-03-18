import Datepicker from "../shared/Datepicker";
import {useNavigate} from "react-router-dom";



const uploadInput = document.getElementById('upload');
const filenameLabel = document.getElementById('filename');
const imagePreview = document.getElementById('image-preview');

// Check if the event listener has been added before
let isEventListenerAdded = false;

uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        filenameLabel.textContent = file.name;

        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML =
                `<img src="${e.target.result}" class="max-h-48 rounded-lg mx-auto" alt="Image preview" />`;
            imagePreview.classList.remove('border-dashed', 'border-2', 'border-gray-400');

            // Add event listener for image preview only once
            if (!isEventListenerAdded) {
                imagePreview.addEventListener('click', () => {
                    uploadInput.click();
                });

                isEventListenerAdded = true;
            }
        };
        reader.readAsDataURL(file);
    } else {
        filenameLabel.textContent = '';
        imagePreview.innerHTML =
            `<div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">No image preview</div>`;
        imagePreview.classList.add('border-dashed', 'border-2', 'border-gray-400');

        // Remove the event listener when there's no image
        imagePreview.removeEventListener('click', () => {
            uploadInput.click();
        });

        isEventListenerAdded = false;
    }
});

uploadInput.addEventListener('click', (event) => {
    event.stopPropagation();
});



function AuctionCreation() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-1/3">
                <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
                    <div className="px-4 py-6">
                        <div id="image-preview"
                             className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                            <input id="upload" type="file" className="hidden" accept="image/*"/>
                            <label htmlFor="upload" className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor"
                                     className="w-8 h-8 text-gray-700 mx-auto mb-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                                </svg>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                                <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be
                                    less than <b className="text-gray-600">2mb</b></p>
                                <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b
                                    className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                                <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                            </label>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full">
                                <label
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                                    <span className="text-center ml-2">Upload</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


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

                    <label htmlFor="upload" className="sr-only">
                        Choose file
                    </label>
                    <input
                        type="file"
                        name="upload"
                        id="upload"
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