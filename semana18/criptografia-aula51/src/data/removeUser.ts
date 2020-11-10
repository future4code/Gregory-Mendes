import { connection } from ".."

export const removeUser = async (id: string): Promise<void> => {
    await connection("to_do_list_users")
    .delete()
    .where({id})
}