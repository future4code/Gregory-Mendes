import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export async function getUserByIdAuth(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string;
        const tokenData: AuthenticationData = getTokenData(token);

        if (tokenData.role !== "NORMAL") {
            res.statusCode = 401;
            throw new Error("Não autorizado");
        }

        const user = await selectUserById(tokenData.id);

        res.send({
            id: user.id,
            email: user.email,
            role: tokenData.role
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