import {create} from "zustand";
import {UserCredentials} from "./types.ts";

interface State {
    email: string;
    userRole: string;
    userId: string;
    setUser: (newUser: UserCredentials) => void;
    clearUser: () => void;
}

const initialState: State = {
    email: "",
    userRole: "",
    userId: "",
    setUser: () => {
    },
    clearUser: () => {
    },
};

export const useUserStore = create<State>((set) => ({
    ...initialState,
    setUser: (newUser) => set({...newUser}), // Mettre à jour l'état avec les nouvelles valeurs
    clearUser: () => set(initialState),
}));