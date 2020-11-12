import { connection } from "..";
import { User } from "../types";

export const selectProfileById = async (id: string): Promise<User> => {
    try {
        const result = await connection("cookenu_users")
        .select("id", "name", "email")
        .where({id});

        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            role: result[0].role,
            password: result[0].password
        };
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    };
};