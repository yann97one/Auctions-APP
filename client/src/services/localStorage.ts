import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../api/loginService/types";

const getTokenFromStorage = () => localStorage.getItem("token");

const saveTokenInStorage = (token: string) =>
  localStorage.setItem("token", token);

const getTokenPayload = (token: string) => {
  return jwtDecode<JwtPayload>(token!);
};

const clearTokenFromStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export {
  getTokenFromStorage,
  saveTokenInStorage,
  getTokenPayload,
  clearTokenFromStorage,
};
