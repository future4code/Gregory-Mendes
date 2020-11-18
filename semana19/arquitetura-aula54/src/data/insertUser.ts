import { connection } from "./connection"

export const insertUser = async (
    id: string,
    email: string,
    name: string,
    password: string,
    role: USER_ROLES
): Promise<void> => {
    try {
        await connection("User_Arq")
        .insert({
            id,
            email,
            name,
            password,
            role
        });
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    };
};

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
};