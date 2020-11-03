import { connection } from '../index';
import { User } from '../types'

export async function selectAllUsers(): Promise<User[]> {
    try {
        const result = await connection
        .select("*")
        .from("ToDoListUser");

        // console.log(result)

        return result;
    } catch (error) {
        return [];
    };
};