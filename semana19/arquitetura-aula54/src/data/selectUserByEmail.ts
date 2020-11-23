import { connection } from "./connection"

export const selectUserByEmail = async (
    email: string
): Promise<any> => {
    try {
        const result = await connection("User_Arq")
        .select("*")
        .where({email})

        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
        };
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    };
};