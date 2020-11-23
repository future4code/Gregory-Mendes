import { connection } from "..";
import { User } from "../types";

export const insertUser = async (user: User): Promise<void> => {
    const { id, name, email, role, password } = user;

    await connection("cookenu_users")
        .insert({id, name, email, role, password});
};