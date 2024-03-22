import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiClient } from "../../api";
import { UserDetails } from "src/api/userService/types";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const FORM_FIELDS = [
  { id: "pseudo", label: "Pseudo", value: "pseudo", name: "pseudo" },
  { id: "lastName", label: "Nom", value: "nom", name: "nom" },
  { id: "name", label: "Prénom", value: "prénom", name: "prenom" },
  { id: "email", label: "Email", value: "email", name: "email" },
  {
    id: "phoneNumber",
    label: "Téléphone",
    value: "téléphone",
    name: "telephone",
  },
  { id: "road", label: "Rue", value: "rue", name: "rue" },
  {
    id: "zipCode",
    label: "Code postal",
    value: "codePostal",
    name: "codePostal",
  },
  { id: "city", label: "Ville", value: "ville", name: "ville" },
];

function ViewProfile() {


  const phoneRegExp = /^0[1-9]([ .-]?[0-9]{2}){4}$/
  const zipRegExp = /^(F-)?((0[1-9])|([1-8][0-9])|(9[0-5])|(2[A-HJ-NP-UW-Za-hj-np-u-wz]))[0-9]{3}$/

  const yupValidation = Yup.object().shape({
    pseudo: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
    nom: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
    email: Yup.string().required('Email id is mendatory').email('L\'email n\'est pas valide'),
    prenom: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
    rue: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
    ville: Yup.string().required('Entrer une valeur').min(3, '3 caracteres minimum').max(30,'Limite de champs atteint'),
    telephone: Yup.string().required('Entrer une valeur').matches(phoneRegExp, 'Le numéro de telephone n\'est pas valide').min(10, 'Le numéro de telephone n\'est pas valide').max(10,'Le numéro de telephone n\'est pas valide'),
    codePostal: Yup.string().required('Entrer une valeur').matches(zipRegExp, 'Le code postal n\'est pas valide').min(5, 'Le code postal n\'est pas valide').max(5,'Le code postal n\'est pas valide'),
  });

  const { register, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(yupValidation)
  });


  const navigate = useNavigate();
  const { id } = useParams();

    const [user, setUser] = useState<UserDetails>();

    const [isEditable, setIsEditable] = useState(false);

    const getUserDetail = async () => {
        const response = await apiClient.user.getUserDetail(id!);
        setUser(response);
    };

    const updateUser = async () => {
        if (isEditable) {
            try {
                await apiClient.user.updateUser(user!);
            } catch (error) {
                console.error(error);
            }
        }

        setIsEditable(!isEditable);
    };

    useEffect(() => {
        getUserDetail();
    }, [isEditable]);

    return (

      <div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
          <div
              className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {FORM_FIELDS.map((field, index) => (
                  <div key={index} className="flex flex-wrap -mx-3 mb-5">
                    <div className="md:w-1/2 px-2">
                      <label htmlFor={field.label}
                             className={`block mb-2 text-sm font-medium  dark:text-white ${errors?.[field.name] ? "text-red-500" : "text-gray-900"}`}>
                        {field.label}</label>
                    </div>
                    <div className="md:w-1/2 px-2">
                      <input type="text"
                             id={field.label}
                             {...register(field.name)}
                             value={user?.[field.id]}
                             onChange={(event) =>
                                 setUser({...user, [field.id]: event.target.value})
                             }
                             disabled={!isEditable}
                             className={`block mb-2 text-sm font-medium  dark:text-white ${errors?.[field.name] ? "text-red-500" : "text-gray-900"}`}>
                      </input>
                      {errors?.[field.name] &&
                          <p className="text-red-500 text-sm mt-2">
                            {errors?.[field.name].message}
                          </p>
                      }
                    </div>
                  </div>
              ))}
              <button onClick={updateUser}
                      className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {isEditable ? "Valider" : "Modifier"}
              </button>
            </div>
          </div>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {FORM_FIELDS.map((field, index) => (
                            <div key={index} className="flex flex-wrap -mx-3 mb-5">
                                <div className="md:w-1/2 px-2">
                                    <label htmlFor={field.label}
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        {field.label}</label>
                                </div>
                                <div className="md:w-1/2 px-2">
                                    <input type="text"
                                           id={field.label}
                                           name={field.name}
                                           value={user?.[field.id]}
                                           onChange={(event) =>
                                               setUser({...user, [field.id]: event.target.value})
                                           }
                                           disabled={!isEditable}
                                           className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                    </input>
                                </div>
                            </div>
                        ))}
                        <button onClick={updateUser}
                                className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {isEditable ? "Valider" : "Modifier"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
      </div>
  );
}

export default ViewProfile;
