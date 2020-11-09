import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export async function getUserById(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string;
        const tokenData: AuthenticationData = getTokenData(token);

        const user = await selectUserById(tokenData.id);

        res.send({
            id: user.id,
            email: user.email
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