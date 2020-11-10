import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export async function getUserById(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string;
        
        getTokenData(token);
        
        const id = req.params.id;

        const userData = await selectUserById(id);

        res.send({
            id: userData.id,
            email: userData.email,
        });
    } catch (error) {
        let { message } = error;

        if (message === "jwt must be provided" ||
            message === "invalid signature" ||
            message === "jwt expired"
        ) {
            res.statusCode = 401;
            message = "Não autorizado"
        };

        res.send({message});
    };
}; 