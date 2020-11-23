import { connection } from "..";
import { Recipe } from "../types";

export const insertRecipe = async (recipe: Recipe): Promise<void> => {
    const { id, userId, title, description, createdAt } = recipe;

    await connection("cookenu_recipes")
    .insert({
        id,
        user_id: userId,
        title, 
        description, 
        createdAt});
};