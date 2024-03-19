import {LoginCredentials, RegisterCredentials} from "./types";
import http from "../../axios_helper";
import {UserCredentials} from "../../store/types";

export default {
    registerUser(credentials: RegisterCredentials): Promise<UserCredentials> {
        return http.request("post", "/auth/register", credentials)
    },

    authUser(credentials: LoginCredentials): Promise<UserCredentials> {
        return http.request("post", "/auth/login", credentials)
    }
}