import { connection } from '../index'

export async function updateUser(
    name: string,
    nickname: string,
    id: string
): Promise<void> {
    try {
        await connection.raw(`
            UPDATE ToDoListUser
            SET name = "${name}", nickname = "${nickname}"
            WHERE id = "${id}";
        `);
    } catch (error) {
        console.log(error);
    };
};