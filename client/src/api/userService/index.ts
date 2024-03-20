import http from "../../axios_helper";
import { UserDetails } from "./types";

export default {
  getUserDetail(userId: string): Promise<UserDetails> {
    return http.request("get", `/users/detail/${userId}`);
  },

  updateUser(user: UserDetails): Promise<UserDetails> {
    return http.request("put", `/users/update`, user);
  },
};
