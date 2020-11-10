import { Request, Response } from "express";
import insertUser, { USER_ROLES } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import generateId from "../services/idGenerator";

export default async function signUp(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password
        ) {
          throw new Error('Preencha os campos "name","nickname" e "email"')
        };

        const hashPassword = await generateHash(req.body.password)

        const id: string = generateId();

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            hashPassword,
            req.body.role
        );

        const token: string = generateToken({
            id,
            role: req.body.role
        });
        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            });

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        });
    };
};