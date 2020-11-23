import { connection } from "..";
import { InputData, User } from "../types";

export const mainFunctionalities = async (data: InputData): Promise<User[]> => {
    try {
        const usersPerPage: number = 5;
        const offset: number = usersPerPage * (data.page - 1)
        
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${data.name}%"
            OR type LIKE "%${data.type}%"
            ORDER BY ${data.orderBy} ${data.orderType}
            LIMIT 5
            OFFSET ${offset}
        `);

        return result[0];
    } catch (error) {
        throw new Error(error.message);
    };
};