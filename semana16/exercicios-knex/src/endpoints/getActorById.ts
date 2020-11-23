import { Request, Response } from 'express';
import { Actor } from '../types';
import { selectActorById } from '../data/selectActorById';

export const getActorById = async (req: Request, res: Response) => {
    try {
        const actors: Actor[] = await selectActorById(req.params.id);

        if (actors.length === - 1) {
            res.statusCode = 404
            throw new Error("No actors found");
        };
        
        res.status(200).send(actors);
    } catch (error) {
        res.status(error);
    };
};