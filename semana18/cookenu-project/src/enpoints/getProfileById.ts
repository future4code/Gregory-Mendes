import { Request, Response } from "express";
import { selectProfileById } from "../data/selectProfileById";

export const getProfileById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const token = req.headers.authorization as string;
        
        const user = await selectProfileById(id);
        
        if (!user) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        if (!token) {
            res.statusCode = 401;
            throw new Error("Não autorizado");  
        };
            
        res.send({
            id: user.id,
            name: user.name,
            email: user.email
        });
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