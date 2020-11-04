import { connection } from "..";
import { InputData, User } from "../types";

export const filterUserByName = async (data: InputData): Promise<User[]> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${data.name}%"
        `);

        return result[0];
    } catch (error) {
        throw new Error(error.message);
    };
};