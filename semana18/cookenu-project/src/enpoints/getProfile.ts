import { Request, Response } from "express";
import { selectProfile } from "../data/selectProfile";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export const getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;
        const tokenData: AuthenticationData = getTokenData(token);

        const user = await selectProfile(tokenData.id);

        if (!user) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        res.send({
            id: user.id,
            name: user.name,
            email: user.email
        });
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