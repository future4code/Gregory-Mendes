import { Request, Response } from "express";
import selectUserByEmail, { User } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;

        let message = "Usuário logado!";

        if (!email || !password) {
            res.statusCode = 406;
            message = "'E-mail' e 'senha' são obrigatórios."
            throw new Error(message);
        };

        const user: User = await selectUserByEmail(email);

        if (!user) {
            res.statusCode = 404;
            message = "Usuário não encontrado ou senha incorreta."
            throw new Error(message);
        };

        const passwordIsCorrect: boolean = await compareHash(password, user.password);

        if (!passwordIsCorrect) {
            res.statusCode = 401;
            message = "Usuário não encontrado ou senha incorreta."
            throw new Error(message);
        };

        const token: string = generateToken({
            id: user.id,
            role: user.role
        });

        res.send({message, token});
    } catch (error) {
        let { errorMessage } = error;

        if (errorMessage === "Cannot read property 'id' of undefined") {
            errorMessage = "Usuário não encontrado ou senha incorreta.";
            res.statusCode = 404;
        };

        if (errorMessage === "Field 'name' doesn't have a default value") {
            errorMessage = "Insira um nome para o usuário.";
            res.statusCode = 406;
        };

        res.send(errorMessage);
    };
};