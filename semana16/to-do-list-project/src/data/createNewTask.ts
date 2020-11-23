import { connection } from '../index'

export async function createNewTask(
    title: string,
    description: string,
    limit_date: Date,
    creator_user_id: string
): Promise<void> {
    try {
        await connection
        .insert({
            title,
            description,
            limit_date,
            creator_user_id
        })
        .into("ToDoListTask");
    
    } catch (error) {
        console.log(error);
    };
};