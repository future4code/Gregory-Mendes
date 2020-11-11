import { connection } from ".."

export const updatePassword = async (id: string, password: string): Promise<void> => {
    await connection("to_do_list_users")
    .update({password})
    .where({id});
};