import { Request, Response } from "express";
import { updateUser } from "../data/updateUser";
import { User } from "../types";

export const editUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id
        const { name, nickname }: User = req.body;
        
        if(name === "" || nickname === "") {
            throw new Error("Por favor, preencha todos os campos")
        };

        await updateUser(name, nickname, id);

        res.status(200).send("Usuário editado com sucesso!")
    } catch (error) {
        
    };
};