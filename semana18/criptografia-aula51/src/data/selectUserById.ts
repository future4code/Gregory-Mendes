import { connection } from "..";
import { User } from "./selectUserByEmail";

export const selectUserById = async (id: string): Promise<User> => {
    const result = await connection("to_do_list_users")
    .select("id", "email")
    .where({id});

    return result[0]
};