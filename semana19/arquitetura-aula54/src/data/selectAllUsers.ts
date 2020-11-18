import { connection } from "./connection"

export const selectAllUsers = async (): Promise<any> => {
    try {
        const result = await connection("User_Arq")
        .select("*");

        return result.map((user: any) => {
            const { id, name, email, role } = user;

            return {
                id,
                name,
                email,
                role
            };
        });
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    };
};