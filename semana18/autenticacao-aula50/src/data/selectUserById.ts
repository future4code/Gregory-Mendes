import { connection } from "..";
import { User } from "../types";

export async function selectUserById(id: string): Promise<User> {
    const result = await connection("aula50_exercicios")
    .select("*")
    .where({id});

    return result[0];
}