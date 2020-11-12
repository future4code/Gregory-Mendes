import { Request, Response } from "express";
import { selectuserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { hashCompare } from "../services/hashManager"

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        let message = "Usuário logado";

        if (!email || !password) {
            res.statusCode = 406;
            message = "Os campos 'email' e 'password' devem ser preenchidos."
            throw new Error(message);
        };

        const user = await selectuserByEmail(email);

        if (!user) {
            res.statusCode = 404;
            message = "Usuário não encontrado ou senha está incorreta."
            throw new Error(message);
        };

        const passwordIsCorrect = await hashCompare(password, user.password);

        if (!passwordIsCorrect) {
            res.statusCode = 404;
            message = "Usuário não encontrado ou senha está incorreta."
            throw new Error(message);
        };

        const token = generateToken({
            id: user.id, 
            role: user.role
        });

        res.send({message, token});
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