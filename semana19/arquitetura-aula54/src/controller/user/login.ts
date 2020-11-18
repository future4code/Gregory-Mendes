import { Request, Response } from "express";
import { selectUserByEmailBusiness } from "../../business/user/selectUserByEmailBusiness";


export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const input = {
            email: req.body.email,
            password: req.body.password,
        };

        const token = await selectUserByEmailBusiness(input)

        res
            .status(200)
            .send({
                message: "Usuário logado!",
                token
            });
    } catch (error) {
        res.status(406).send(error.message);
    };
};