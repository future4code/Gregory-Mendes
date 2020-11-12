export type User = {
    id: string,
    name: string,
    email: string,
    role: USER_TYPE,
    password: string
};

export enum USER_TYPE {
    NORMAL = "normal",
    ADMIN = "admin"
};