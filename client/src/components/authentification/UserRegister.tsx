import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {RegisterCredentials} from "../../api/loginService/types";
import {apiClient} from "../../api";
import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

    const phoneRegExp = /^0[1-9]([ .-]?[0-9]{2}){4}$/
    const zipRegExp = /^(F-)?((0[1-9])|([1-8][0-9])|(9[0-5])|(2[A-HJ-NP-UW-Za-hj-np-u-wz]))[0-9]{3}$/

    const yupValidation = Yup.object().shape({
        pseudo: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
        name: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
        email: Yup.string().required('Email id is mendatory').email('L\'email n\'est pas valide'),
        firstname: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
        road: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
        city: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
        repeatPassword: Yup.string().required('Entrer une valeur').oneOf([Yup.ref('password'), null], 'Les deux mots de passe doivent correspondre'),
        password: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
        phone: Yup.string().required('Entrer une valeur').matches(phoneRegExp, 'Le numéro de telephone n\'est pas valide').min(10, 'Le numéro de telephone n\'est pas valide').max(10,'Le numéro de telephone n\'est pas valide'),
        zip: Yup.string().required('Entrer une valeur').matches(zipRegExp, 'Le code postal n\'est pas valide').min(5, 'Le code postal n\'est pas valide').max(5,'Le code postal n\'est pas valide'),
    });
    const { register, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(yupValidation)
    });


    const navigate = useNavigate();
    const [registerCredentials, setRegisterCredentials] = useState<RegisterCredentials>(INIT_REGISTER_INFO);

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        try {
            event.preventDefault();
            await apiClient.auth.registerUser(registerCredentials)
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form className="max-w-sm mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-5">
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="firstname"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.firstname ? "text-red-500" : "text-gray-900" }`}>
                                    Prénom</label>
                                <input
                                        {...register('firstname')}
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           firstName: event.target.value
                                       })}
                                       className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.firstname ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                       placeholder="Prénom"
                                       type="text"
                                />
                                {errors.firstname &&
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors?.firstname.message}
                                    </p>
                                }
                            </div>
                            <div className="md:w-1/2 px-2">
                                <label htmlFor="name"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.name ? "text-red-500" : "text-gray-900" }`}>
                                    Nom</label>
                                <input type="text"
                                       {...register('name')}
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           lastName: event.target.value
                                       })}
                                       className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.name ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                       placeholder="Nom" />
                                {errors.name &&
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors?.name.message}
                                    </p>
                                }
                            </div>
                        </div>

                            <div className="mb-5">
                                <label htmlFor="pseudo"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.pseudo ? "text-red-500" : "text-gray-900" }`}>
                                    Pseudo</label>
                                <input type="text"
                                       {...register('pseudo')}
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           pseudo: event.target.value
                                       })}
                                       className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.pseudo ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                       placeholder="Pseudo" />
                                {errors.pseudo &&
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors?.pseudo.message}
                                    </p>
                                }
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-5">
                                <div className="md:w-1/2 px-2">
                                    <label htmlFor="email"
                                           className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.email ? "text-red-500" : "text-gray-900" }`}>
                                        Email</label>
                                    <input type="email"
                                           {...register('email')}
                                           onChange={(event) => setRegisterCredentials({
                                               ...registerCredentials,
                                               email: event.target.value
                                           })}
                                           className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.email ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                           placeholder="name@gmail.com" />
                                    {errors.email &&
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors?.email.message}
                                        </p>
                                    }
                                </div>
                                <div className="md:w-1/2 px-2">
                                    <label htmlFor="phone"
                                           className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.phone ? "text-red-500" : "text-gray-900" }`}>
                                        Téléphone</label>
                                    <input type="text"
                                           {...register('phone')}
                                           onChange={(event) => setRegisterCredentials({
                                               ...registerCredentials,
                                               phoneNumber: event.target.value
                                           })}
                                           className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.phone ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                           placeholder="06 06 06 06 06" />
                                    {errors.phone &&
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors?.phone.message}
                                        </p>
                                    }
                                </div>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="road"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.road ? "text-red-500" : "text-gray-900" }`}>
                                    Rue</label>
                                <input type="text"
                                       {...register('road')}
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           road: event.target.value
                                       })}
                                       className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.road ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                       placeholder="8 rue de la poterie" />
                                {errors.road &&
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors?.road.message}
                                    </p>
                                }
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-5">
                                <div className="md:w-1/2 px-2">
                                    <label htmlFor="zip"
                                           className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.zip ? "text-red-500" : "text-gray-900" }`}>
                                        Code postal</label>
                                    <input type="text"
                                           {...register('zip')}
                                           onChange={(event) => setRegisterCredentials({
                                               ...registerCredentials,
                                               zipCode: event.target.value
                                           })}
                                           className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.zip ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                           placeholder="35 000" />
                                    {errors.zip &&
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors?.zip.message}
                                        </p>
                                    }
                                </div>
                                <div className="md:w-1/2 px-2">
                                    <label htmlFor="city"
                                           className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.city ? "text-red-500" : "text-gray-900" }`}>
                                        Ville</label>
                                    <input type="text"
                                           {...register('city')}
                                           onChange={(event) => setRegisterCredentials({
                                               ...registerCredentials,
                                               city: event.target.value
                                           })}
                                           className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.city ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                           placeholder="Rennes" />
                                    {errors.city &&
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors?.city.message}
                                        </p>
                                    }
                                </div>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="password"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.password ? "text-red-500" : "text-gray-900" }`}>
                                    Mot de passe</label>
                                <input type="password"
                                       {...register('password')}
                                       placeholder="••••••••"
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           password: event.target.value
                                       })}
                                       className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.password ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                       required/>
                                {errors.password &&
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors?.password.message}
                                    </p>
                                }
                            </div>
                            <div className="mb-5">
                                <label htmlFor="repeatPassword"
                                       className={`block mb-2 text-sm font-medium  dark:text-white ${ errors.repeatPassword ? "text-red-500" : "text-gray-900" }`}>
                                    Confirmation</label>
                                <input type="password"
                                       {...register('repeatPassword')}
                                       placeholder="••••••••"
                                       onChange={(event) => setRegisterCredentials({
                                           ...registerCredentials,
                                           repeatPassword: event.target.value
                                       })}
                                       className={`shadow-sm bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${errors.repeatPassword ? "text-red-500 border-red-500  " : "text-gray-900 border-gray-300" }`}
                                       />
                                {errors.repeatPassword &&
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors?.repeatPassword.message}
                                    </p>
                                }
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-5">
                                <div className="md:w-1/2 px-2">
                                    <button type="submit"
                                            onClick={handleSubmit}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Créer
                                    </button>
                                </div>
                                <div className="md:w-1/2 px-2">
                                    <button onClick={() => navigate('/')}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Annuler
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