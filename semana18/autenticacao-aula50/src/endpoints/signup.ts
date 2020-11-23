import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateToken } from "../services/authenticator";
import { generateId } from '../services/idGenerator'

export async function signup(req: Request, res: Response): Promise<void> {
    try {
        const id: string = generateId();
        const { email, password } = req.body;

        let message = "Usuário cadastrado com sucesso!";

        if (!email || !email.includes("@")) {
            res.statusCode = 406;
            message = "E-mail inválido.";
            throw new Error(message);
        };

        if (!password || password.length < 6) {
            res.statusCode = 400;
            message = "Senha inválida.";
            throw new Error(message);
        };

        await createUser(id, email, password);

        const token: string = generateToken({id});

        res.status(201).send({message, token});
    } catch (error) {
        res.send({message: error.message || error.sqlMessage});
    };
};