import { Request, Response } from "express-serve-static-core";
import { removeUser } from "../data/removeUser";

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;

        await removeUser(id);

        res.send("Usuário excluído.");
    } catch (error) {
        res.status(404).send("Usuário não encontrado.");
    };
};