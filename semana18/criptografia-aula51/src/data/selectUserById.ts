import { connection } from "..";
import { User } from "../types";

export async function selectUserById(id: string): Promise<User> {
    const result = await connection("to_do_list_users")
    .select("*")
    .where({id});

    return result[0];
} 