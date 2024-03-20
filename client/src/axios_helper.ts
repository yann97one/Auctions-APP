import axios from "axios";
import {JwtPayload} from "@api/loginService/types";
import {getTokenFromStorage} from "@services/localStorage";

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

const token = getTokenFromStorage();

if (token) {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

const request = (method: string, url: string, data?: any): Promise<any> => {
    return axios({
        method: method,
        url: url,
        data: data,

    });
};

const requestAuth = async (method: string, url: string, data?: any): Promise<JwtPayload> => {
    const response = await axios({
        method: method,
        url: url,
        data: data,
    });
    return response.data;
};

export default {
    requestAuth,
    request,
};
