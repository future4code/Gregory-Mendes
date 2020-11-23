import { connection } from "..";
import { InputData, User } from "../types";

export const filterUserByType = async (data: InputData): Promise<User[]> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE type LIKE "%${data.type}%"
        `);

        return result[0];
    } catch (error) {
        throw new Error(error.message);
    };
};