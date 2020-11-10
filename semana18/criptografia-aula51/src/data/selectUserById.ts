import { connection } from "..";

export const selectUserById = async (id: string): Promise<any> => {
    await connection("to_do_list_users")
    .select("id", "email")
    .where({id});
};