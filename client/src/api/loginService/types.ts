import {Role} from "../../router/types";

interface LoginCredentials {
    email: string;
    password: string;

}

interface RegisterCredentials extends LoginCredentials {
    repeatPassword: string;
    zipCode: string;
    city: string;
    road: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    pseudo: string;
}

interface JwtPayload {
    id: string;
    email: string;
    firstName: string;
    pseudo: string;
    role: Role;
    tenant: string;
    token: string;
}


interface User extends RegisterCredentials {
    id: string;
}

export type {LoginCredentials, RegisterCredentials, User, JwtPayload}