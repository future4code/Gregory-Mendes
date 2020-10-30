import { Request, Response } from 'express';
import { selectAllUsers } from '../data/selectAllUsers';
import { User } from '../types'

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await selectAllUsers();

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Usuários não encontrados.");
        };

        res.status(200).send(users);
    } catch (error) {
        res.send(error.message);
    };
};