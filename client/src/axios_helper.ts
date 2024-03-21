import axios from "axios";
import { JwtPayload } from "@api/loginService/types";
import { getTokenFromStorage } from "@services/localStorage";
import { Type } from "react-toastify/dist/utils";

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

const token = getTokenFromStorage();

if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

const request = async (
  method: string,
  url: string,
  data?: Type
): Promise<Type> => {
  const response = await axios({
    method: method,
    url: url,
    data: data,
  });
  return response.data;
};

const requestAuth = async (
  method: string,
  url: string,
  data?: JwtPayload
): Promise<JwtPayload> => {
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
