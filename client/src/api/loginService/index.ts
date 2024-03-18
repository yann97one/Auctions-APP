import {LoginCredentials, RegisterCredentials} from "./types";
import {request} from "../../axios_helper";

export default {
    registerUser(credentials: RegisterCredentials): Promise<String> {
        return request("post", "/auth/register", credentials)
    },

    authUser(credentials: LoginCredentials): Promise<String> {
        return request("post", "/auth/login", credentials)
    }
}