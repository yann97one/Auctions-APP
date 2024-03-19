import http from "../../axios_helper";
import {UserDetails} from "./types";

export default {
    getUserDetail(userId: string): Promise<UserDetails> {
        return http.request("get", "/user/detail", userId)
    },
}