import axios from 'axios'
import {getTokenFromStorage} from "./services/localStorage";
import {toast} from "react-toastify";

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const token = getTokenFromStorage();

if (token !== "undefined") {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        toast.error("An unexpected error occurred", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    return Promise.reject(error);
})

const request = (method: string, url: string, data: any): Promise<any> => {
    return axios({
        method: method,
        url: url,
        data: data,
    }).then(response => response.data)
}

export default {
    request
};