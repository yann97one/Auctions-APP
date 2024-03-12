enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

interface ReactRoute {
    path: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.LazyExoticComponent<(props: any) => JSX.Element>;
    protectedRoute?: boolean;
    roles: Role[];
}

export {Role};
export type {ReactRoute};
