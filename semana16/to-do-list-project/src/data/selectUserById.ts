import { connection } from '../index';
import { User } from '../types';

export async function selectUserById(id: string): Promise<User[]> {
    try {
        const result = await connection
        .select("*")
        .from("ToDoListUser")
        .where("id", "LIKE", `${id}`)

        return result;
    } catch (error) {
        return [];
    };
};