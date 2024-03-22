import Datepicker from "../shared/Datepicker";
import {useNavigate} from "react-router-dom";
import {ChangeEventHandler, useState} from "react";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


function ImageUpload() {
    const [file, setFile] = useState<string | null>(null);

    const onFileUploaded: ChangeEventHandler<HTMLInputElement> = event => {
        event.preventDefault();
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setFile(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const border = file ? "border-solid" : "border-dashed"
    const clearFile = () => {
        setFile(null);
        const fileInput = document.getElementById('upload') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = ''; // Clear selected file from input
        }
    };

    return (
        <div
            className={`max-w-sm p-6 mb-4 bg-gray-100 border-2 ${border} border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer`}>
            {file ? (
                <div onClick={clearFile}>
                    <img src={file} alt="Preview" className="w-full h-48 object-cover mb-4 rounded-lg cursor-pointer"/>
                </div>
            ) : (
                <label htmlFor="upload" className="cursor-pointer flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                    </svg>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Envoyer une photo</h5>
                    <p className="font-normal text-sm text-gray-400 md:px-6">Choisissez une taille de photo qui doit
                        être inférieure à <b
                            className="text-gray-600">100KB</b></p>
                    <p className="font-normal text-sm text-gray-400 md:px-6">et doit être en <b
                        className="text-gray-600">JPG, GIF, PNG, JPEG</b> format.</p>
                    <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                    <input id="upload"
                           type="file" className="hidden" accept="image/*" value={file!}
                           onChange={onFileUploaded}/>
                </label>
            )}
        </div>
    );
}

function AuctionCreation() {
    const navigate = useNavigate();

    const zipRegExp = /^(F-)?((0[1-9])|([1-8][0-9])|(9[0-5])|(2[A-HJ-NP-UW-Za-hj-np-u-wz]))[0-9]{3}$/

    const yupValidation = Yup.object().shape({
        article: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30, 'Limite de champs atteint'),
        map: Yup.number().required('Entrer une valeur').positive('Mise a prix minimum positive'),
        message: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(300, 'Limite de champs atteint'),
        street: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30, 'Limite de champs atteint'),
        city: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30, 'Limite de champs atteint'),
        zip: Yup.string().required('Entrer une valeur').matches(zipRegExp, 'Le code postal n\'est pas valide').min(5, 'Le code postal n\'est pas valide').max(5,'Le code postal n\'est pas valide'),
        categorie: Yup.string().required('Sélectionner une catégorie'),
    });
    const { register, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(yupValidation)
    });

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-1/3">
                <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
                    <div className="px-4 py-6">
                        <ImageUpload/>
                    </div>
                </div>

            </div>
            <div className="flex flex-col w-96">
                <form>
                    <label htmlFor="Article"
                           className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.article ? "text-red-500" : "text-gray-900" }`}>
                        Article :</label>
                    <input type="text"
                           {...register('article')}
                           className={`shadow-sm max-w-sm my-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors.article ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300"}`}
                           />
                    {errors.article &&
                        <p className="text-red-500 text-sm mt-2">
                            {errors?.article.message}
                        </p>
                    }
                    <label
                        htmlFor="message"
                        className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.message ? "text-red-500" : "text-gray-900" }`}>
                        Description :
                    </label>
                    <textarea
                        rows={4}
                        {...register('message')}
                        className={`shadow-sm max-w-sm my-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors.message ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300"}`}
                        defaultValue={""}
                    />
                    {errors.message &&
                        <p className="text-red-500 text-sm mt-2">
                            {errors?.message.message}
                        </p>
                    }
                    <label
                        htmlFor="categorie"
                        className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.categorie ? "text-red-500" : "text-gray-900" }`}>
                        Catégorie :
                    </label>
                    <select
                        {...register('categorie')}
                        className={`bg-gray-50 max-w-sm my-2 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.categorie ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300"}`}>
                        <option selected>Choisir une catégorie</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Ameublement">Ameublement</option>
                        <option value="Vêtement">Vêtement</option>
                        <option value="Sport&loisirs">Sport & loisirs</option>
                    </select>
                    {errors.categorie &&
                        <p className="text-red-500 text-sm mt-2">
                            {errors?.categorie.message}
                        </p>
                    }

                    <label htmlFor="map"
                           className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.map ? "text-red-500" : "text-gray-900" }`}>
                        Mise à prix :</label>
                    <input type="number"
                           {...register('map')}
                           className={`shadow-sm max-w-sm my-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors.map ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300"}`}
                           required/>
                    {errors.map &&
                        <p className="text-red-500 text-sm mt-2">
                            {errors?.map.message}
                        </p>
                    }
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
                                <label htmlFor="street"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.street ? "text-red-500" : "text-gray-900" }`}>
                                    Rue :</label>
                                <input type="text"
                                       {...register('street')}
                                       className={`shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light${errors.street ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300"}`}
                                       />
                                <label htmlFor="zip"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.zip ? "text-red-500" : "text-gray-900" }`}>
                                    Code postal :</label>
                                <input type="text"
                                       {...register('zip')}
                                       className={`shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light${errors.zip ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300"}`}
                                       />
                                <label htmlFor="city"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.city ? "text-red-500" : "text-gray-900" }`}>
                                    Ville :</label>
                                <input type="text"
                                       {...register('city')}
                                       className={`shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light${errors.city ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300"}`}
                                       />
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
                            <button onClick={() => console.log()}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Annuler
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuctionCreation;