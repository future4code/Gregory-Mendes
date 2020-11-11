import { Request, Response } from "express";
import selectUserByEmail from "../data/selectUserByEmail";
import { updatePassword } from "../data/updatePassword";
import { hash } from "../services/hashManager";
import { writeEmail } from "../services/mailer";

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const email = req.body.email;

        if(!email) {
            res.statusCode = 400;
            throw new Error("Insira um e-mail válido");  
        };

        const user = await selectUserByEmail(email);

        if (!user) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado");
        };

        const newPassword = String(123456);

        const hashPassword = await hash(newPassword);

        await updatePassword(user.id, hashPassword);

        await writeEmail(
            "Grégory Mendes <greg@gmail.com>",
            "joaomateus@gmail.com",
            "Opa, eae",
            "Fala joão, tudo bem?",
            `<p>Eae João, tudo bem? Essa é a sua nova senha: ${newPassword}</p>`
        );

        res.send({message: "Senha atualizada com sucesso!"});
    } catch (error) {
        res.send({message: "Não foi psossível atualizar sua senha."});
    };
};