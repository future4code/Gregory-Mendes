import { connection } from "..";
import { User } from "../types";

export async function selectUserByEmail(email: string): Promise<User> {
    try {
        const result = await connection("aula50_exercicios")
        .select("*")
        .where({email});
    
        return {
            id: result[0].id,
            email: result[0].email,
            password: result[0].password
        };
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    };
};