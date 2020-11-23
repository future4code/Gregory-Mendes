import { connection } from ".."

export const updateRecipe = async (id: string, userId: string, title: string, description: string): Promise<any> => {
    await connection("cookenu_recipes")
    .update({title, description})
    .where({id, user_id: userId});
};