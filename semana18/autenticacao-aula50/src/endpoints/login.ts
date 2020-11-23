import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { User } from "../types";



export async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;

        let message = "Usuário logado!";

        if (!email || !password) {
            res.statusCode = 406;
            message = "E-mail e senha são obrigatórios.";
            throw new Error(message);
        };

        if (!email.includes("@")) {
            res.statusCode = 406;
            message = "E-mail inválido.";
            throw new Error(message);
        };

        const user: User = await selectUserByEmail(email);

        if (!user) {
            res.statusCode = 404;
            message = "Usuário não encontrado ou a senha está incorreta.";
            throw new Error(message);
        };

        if (user.password !== password) {
            res.statusCode = 401;
            message = "Usuário não encontrado ou a senha está incorreta."
            throw new Error(message);
        };

        const token = generateToken({id: user.id});

        res.send({message, token})
    } catch (error) {
        res.status(400).send({message: error.message})
    };
};