import { Request, Response } from "express";
import { insertRecipe } from "../data/insertRecipe";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { Recipe } from "../types";

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = generateId();
        const createdAt: string = new Date().toISOString().split("T")[0];
        
        const { title, description }: Recipe = req.body;
        
        let message = "Receita criada!"
        
        if (!title || !description) {
            res.statusCode = 406;
            message = "Preencha os campos 'title' e 'description'";
            throw new Error(message);
        };
        
        const token = req.headers.authorization as string;
        const tokenData = getTokenData(token);
        
        if (!token) {
            res.statusCode = 401;
            throw new Error("Não autorizado");  
        };

        await insertRecipe({
            id,
            userId: tokenData.id,
            title,
            description,
            createdAt
        });

        res.status(201).send({message});
    } catch (error) {
        res.send({message: error.message});
    };
};