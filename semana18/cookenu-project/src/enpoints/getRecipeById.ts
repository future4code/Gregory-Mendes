import { Request, Response } from "express";
import { selectRecipeById } from "../data/selectRecipeById";

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const token = req.headers.authorization as string;

        if (!token) {
            res.statusCode = 401;
            throw new Error("Não autorizado");  
        };

        const recipe = await selectRecipeById(id);

        if (!recipe) {
            res.statusCode = 404;
            throw new Error("Receita não encontrada");
        };

        const [ year, month, day ] = recipe.createdAt.split("-")
        const recipeCreatedDate: string = `${day}/${month}/${year}`; 

        res.send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipeCreatedDate
        });
    } catch (error) {
        let { message } = error;

        if (message === "invalid signature" ||
            message === "jwt must be provided" ||
            message === "jwt expired"
        ) {
            res.statusCode = 401;
            message = "Não autorizado.";
        };

        res.send({message: error.message});
    };
};