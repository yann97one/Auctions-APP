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

interface User extends RegisterCredentials {
    id: string;
}

export type {LoginCredentials, RegisterCredentials, User}