import { connection } from '../index'

export async function createNewUser(
    name: string,
    nickname: string,
    email: string
): Promise<void> {
    try {
        await connection
        .insert({
            name,
            nickname,
            email
        })
        .into("ToDoListUser");
        
    } catch (error) {
        console.log(error);
    };
};