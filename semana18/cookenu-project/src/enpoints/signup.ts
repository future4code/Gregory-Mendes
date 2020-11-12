import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { User } from "../types";

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = generateId();

        const { name, email, role, password }: User = req.body;

        let message = "Usuário criado com sucesso!"

        if (!name || !email || !password) {
            res.statusCode = 400;
            message = "Por favor, preencha os campos 'name', 'email' e 'password'.";
            throw new Error(message);
        };

        if (password.length < 6) {
            res.statusCode = 400;
            message = "A senha deve possuir mais que 6 caracteres.";
            throw new Error(message);
        };

        const cypherPassword = await hash(password);

        const token = generateToken({id, role});

        await insertUser({
            id,
            name, 
            email, 
            role, 
            password: cypherPassword
        });

        res.status(201).send({message, token});
    } catch (error) {
        res.send({message: error.message})
    };
};