interface UserLogin {
    email: string;
    password: string;

}

interface UserRegister extends UserLogin {
    zipCode: string;
    city: string;
    address: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    pseudo: string;
}

interface User extends UserRegister {
    id: string;
}

export type {UserLogin, UserRegister, User};