import { Request, Response } from 'express'
import { createUserBusiness } from '../../business/user/createUserBusiness';
import { UserInput } from '../../model/User';

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const input: UserInput = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        const token = await createUserBusiness(input);

        res.status(201).send({token});
    } catch (error) {
        res
            .status(error.statusCode)
            .send({message: error.message || error.sqlMessage});
    };
};