import { Request, Response } from 'express';
import { filterUsersByName, filterUsersByType } from '../data/filterUsers';
import { InputData, USER_TYPE } from '../types';

export const searchUsersByName = async (req: Request, res: Response): Promise<void> =>{
    try {
        const data: InputData = {
            name: req.query.name as string,
            type: (req.query.type as USER_TYPE)
        };

        if (!data.name) {
            throw new Error("Por favor, insira um nome para filtrar.");
        };

        const result = await filterUsersByName(data);
        
        if(!result.length) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        };
        
        res.status(200).send(result);
    } catch (error) {
       console.log(error)
       res.status(400).send({message: error.message})
    };
};

export const searchUsersByType = async (req: Request, res: Response): Promise<void> =>{
    try {
        const data: InputData = {
            name: req.query.name as string,
            type: (req.params.type  as USER_TYPE)
        };

        if (!data.type) {
            throw new Error("Por favor, insira um 'type' para filtrar.");
        };

        const result = await filterUsersByType(data);
        
        if(!result.length) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        };
        
        res.status(200).send(result);
    } catch (error) {
       console.log(error)
       res.status(400).send({message: error.message})
    };
};