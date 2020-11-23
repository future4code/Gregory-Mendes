import { Request, Response } from "express";
import { selectRecipes } from "../data/selectRecipes";

export const getRecipeFeed = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;

        if (!token) {
            res.statusCode = 401;
            throw new Error("Não autorizado");
        };

        const recipes = await selectRecipes();

        
        if (!recipes) {
            res.statusCode = 404;
            throw new Error("Receitas não encontradas");
        };

        res.send(recipes);
    } catch (error) {
        let { message } = error;

        if (message === "invalid signature" ||
            message === "jwt must be provided" ||
            message === "jwt expired"
        ) {
            res.statusCode = 401;
            message = "Não autorizado.";
        }
        res.send({message: error.message});
    };
};