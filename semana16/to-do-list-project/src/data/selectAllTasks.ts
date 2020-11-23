import { connection } from '../index';
import { User } from '../types'

export async function selectAllTasks(): Promise<User[]> {
    try {
        const result = await connection
        .select("*")
        .from("ToDoListTask");

        return result;
    } catch (error) {
        return [];
    };
};