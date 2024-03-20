import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiClient } from "../../api";
import { UserDetails } from "src/api/userService/types";

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
      <div>
        {FORM_FIELDS.map((field, index) => (
          <div key={index} className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/2 px-3">
              <label
                htmlFor={field.label}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {field.label}
              </label>
            </div>
            <div className="md:w-1/2 px-3">
              <input
                type="text"
                id={field.label}
                name={field.name}
                value={user?.[field.id]}
                onChange={(event) =>
                  setUser({ ...user, [field.id]: event.target.value })
                }
                disabled={!isEditable}
                className="block w-full px-4 py-2 mt-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={updateUser}
        className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isEditable ? "Valider" : "Modifier"}
      </button>
    </div>
  );
}

export default ViewProfile;
