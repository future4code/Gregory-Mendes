import { Request, Response } from 'express';
import { send } from 'process';
import { selectUserById } from '../data/selectUserById';
import { User } from '../types'

export const getUserById = async (req: Request, res: Response): Promise<void> =>  {
    try {
        const id: string = req.params.id

        const users: User[] = await selectUserById(id);

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado.");
        };

        res.status(200).send(users);
    } catch (error) {
        res.send(error.message);
    };
};