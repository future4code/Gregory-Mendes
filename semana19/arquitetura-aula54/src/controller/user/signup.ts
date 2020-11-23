import { Request, Response } from "express";
import { createUserBusiness } from "../../business/user/createUserBusiness";

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role.toUpperCase(),
        };

        const token = await createUserBusiness(input);

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })
    } catch (error) {
        res.status(406).send(error.message);
    };
};