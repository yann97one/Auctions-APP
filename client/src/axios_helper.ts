import axios from "axios";
import {getTokenFromStorage} from "./services/localStorage";

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
const token = getTokenFromStorage();

if (token !== "undefined") {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
axios.interceptors.response.use(
    (response) => {

        // Parcourez tous les cookies pour trouver celui qui commence par 'jwt='
        const jwtCookie = response.headers["Set-Cookie"];
        console.log(jwtCookie);
        // Si un cookie JWT est trouvé
        if (jwtCookie) {
            // Extrait le token JWT du cookie
            const jwtToken = jwtCookie.split(";")[0].split("=")[1];

            // Stockez le token JWT dans le localStorage
            localStorage.setItem("auth_token", jwtToken);

            // Configurez axios pour inclure le token JWT dans les futures requêtes
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
        }


        // Assurez-vous de renvoyer la réponse pour qu'elle puisse être traitée par la suite
        return response;
    },
    (error) => {
        // Gérez les erreurs de requête ici si nécessaire
        return Promise.reject(error);
    }
);

// axios.interceptors.response.use(null, error => {
//     const expectedError =
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status < 500;

//     if (!expectedError) {
//         toast.error("An unexpected error occurred", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//         })
//     }
//     return Promise.reject(error);
// })

const request = (method: string, url: string, data?: any): Promise<any> => {
    return axios({
        method: method,
        url: url,
        data: data,
    }).then((response) => response.data);
};

export default {
    request,
};
