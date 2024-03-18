interface UserCredentials {
    email: string;
    userRole: string;
    pseudo: string;
    firstName: string;
    token: string;

}

interface UserCreation extends UserCredentials {
    id: string;
}

export type {UserCredentials, UserCreation};