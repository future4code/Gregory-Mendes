import { Request, Response } from 'express';
import { selectTaskById } from '../data/selectTaskById';
import { User } from '../types'

export const getTaskById = async (req: Request, res: Response): Promise<void> =>  {
    try {
        const id: string = req.params.id

        const tasks: User[] = await selectTaskById(id);

        if (!tasks.length) {
            res.statusCode = 404
            throw new Error("Tarefa não encontrada.");
        };

        res.status(200).send(tasks);
    } catch (error) {
        res.send(error.message);
    };
};