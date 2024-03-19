import {createSlice} from "@reduxjs/toolkit";

interface userState {
    email: string;
    userRole: string;
    pseudo: string;
    firstName: string;
    id: string;
}

//const initialToken = getTokenFromStorage();

const initialState: userState = {
    email: "",
    userRole: "",
    pseudo: "",
    firstName: "",
    id: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.userRole = action.payload.userRole;
            state.pseudo = action.payload.pseudo;
            state.firstName = action.payload.firstName;
            state.id = action.payload.id;
        },
        logout: (state) => {
            state.email = "";
            state.userRole = "";
            state.pseudo = "";
            state.firstName = "";
            state.id = "";
        },
        updateUserRole: (state, action) => {
            state.userRole = action.payload;
        }
    }
})

export const {
    login,
    logout,
    updateUserRole
} = userSlice.actions;

export default userSlice.reducer;