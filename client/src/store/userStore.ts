import {create} from "zustand";
import {UserCredentials} from "./types";

interface State {
    user: UserCredentials;
    setUser: (newUser: UserCredentials) => void;
    clearUser: () => void;
    getUser: () => UserCredentials;
    getUserRole: () => string;
}

const initialState: State = {
    user: {
        email: "",
        userRole: "",
        pseudo: "",
        firstName: "",
        token: ""
    },
    getUserRole: () => initialState.user.userRole,
    setUser: () => {
    },
    clearUser: () => {
    },
    getUser: () => initialState.user
};

const useUserStore = create<State>((set) => ({
    ...initialState,
    setUser: (newUser) => set((state) => ({...state, user: newUser})),
    clearUser: () => set(initialState),
    getUser: () => initialState.user,
    getUserRole: () => initialState.user.userRole
}));

export default useUserStore;
