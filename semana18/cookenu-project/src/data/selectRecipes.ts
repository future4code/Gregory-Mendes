import { connection } from "..";

export const selectRecipes = async (): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT cr. id, cr.user_id, cr.title, cr.description, cr.createdAt, cu.name
            FROM cookenu_recipes cr
            INNER JOIN cookenu_users cu
            ON user_id = cu.id;
        `)

        return result[0].map((recipe: any) => {
            const { id, title, description, userId, name} = recipe

            const [ year, month, day ] = recipe.createdAt.split("-")
            const recipeCreatedDate: string = `${day}/${month}/${year}`; 

            return {
                id,
                title,
                description,
                createdAt: recipeCreatedDate,
                user_id: userId,
                name
            };
        });
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    };
};