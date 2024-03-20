import {JwtPayload, LoginCredentials, RegisterCredentials} from "./types";
import http from "../../axios_helper";

export default {
    registerUser(credentials: RegisterCredentials): Promise<JwtPayload> {
        return http.request("post", "/auth/register", credentials)
    },

    authUser(credentials: LoginCredentials): Promise<JwtPayload> {
        return http.request("post", "/auth/login", credentials)
    }
}