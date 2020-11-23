import { Request, Response } from "express";
import { selectRecipeById } from "../data/selectRecipeById";
import { updateRecipe } from "../data/updateRecipe";
import { getTokenData } from "../services/authenticator";
import { getRecipeById } from "./getRecipeById";

export const editRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const token = req.headers.authorization as string;
        const { title, description } = req.body;

        let message = "Receita editada!";

        if (!title || !description) {
            res.statusCode = 406;
            message = "Preencha os campos 'title' e 'description'.";
            throw new Error(message);
        };

        if (!token) {
            res.statusCode = 406;
            message = "Não autorizado.";
            throw new Error(message);
        };

        const tokenData = getTokenData(token);

        if (tokenData.role !== "normal") {
            res.statusCode = 406;
            message = "Não autorizado.";
            throw new Error(message);
        };

        const recipe = await selectRecipeById(id);

        if (!recipe) {
            res.statusCode = 404;
            message = "Receita não encontrada.";
            throw new Error(message)
        };

        if (recipe.userId !== tokenData.id) {
            res.statusCode = 406;
            message = "Não autorizado.";
            throw new Error(message);
        }

        await updateRecipe(id, tokenData.id, title, description);
        
        res.status(201).send(message);
    } catch (error) {
        let { message } = error;

        if (
            message === "invalid signature" ||
            message === "jwt must be provided" ||
            message === "jwt expired"
        ) {
            res.statusCode = 401;
            message = "Não autorizado";
        };
        res.send({message});
    };
};