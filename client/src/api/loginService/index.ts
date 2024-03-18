import {LoginCredentials, RegisterCredentials} from "./types";
import {request} from "../../axios_helper";
import {UserCredentials} from "../../store/types";

export default {
    registerUser(credentials: RegisterCredentials): Promise<UserCredentials> {
        return request("post", "/auth/register", credentials)
    },

    authUser(credentials: LoginCredentials): Promise<UserCredentials> {
        return request("post", "/auth/login", credentials)
    }
}