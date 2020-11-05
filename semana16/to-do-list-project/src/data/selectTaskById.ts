import { connection } from '../index';
import { User } from '../types';

export async function selectTaskById(id: string): Promise<User[]> {
    try {
        const result = await connection
        .select("*")
        .from("ToDoListTask")
        .where("id", "LIKE", `${id}`)

        return result;
    } catch (error) {
        return [];
    };
};