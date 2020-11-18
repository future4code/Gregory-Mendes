import { Request, Response } from "express";
import { getAllUsersBusiness } from "../../business/user/getAllUsersBusiness";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
       const token = req.headers.authorization as string;

       const users = await getAllUsersBusiness(token);

       res.status(200).send(users);
    } catch (error) {
        res.status(406).send({message: error.message});
    };
};