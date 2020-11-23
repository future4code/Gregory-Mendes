import { Request, Response } from "express-serve-static-core";
import { removeUser } from "../data/removeUser";
import { getTokenData } from "../services/authenticator";

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;
        const tokenData = getTokenData(token);

        if (tokenData.role !== "ADMIN") {
            res.statusCode = 401;
            throw new Error("Não autorizado");
        };

        const id = req.params.id;

        await removeUser(id);

        res.send("Usuário excluído.");
    } catch (error) {
        res.status(404).send({message: error.message});
    };
};