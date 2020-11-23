export type User = {
    id: string,
    name: string,
    email: string,
    role: USER_TYPE,
    password: string
};

export type Recipe = {
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string
};

export enum USER_TYPE {
    NORMAL = "normal",
    ADMIN = "admin"
};