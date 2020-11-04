import { Request, Response } from 'express';
import { filterUserByName } from '../data/filterUserByName';
import { filterUserByType } from '../data/filterUserByType';
import { InputData, USER_TYPE } from '../types';

export const searchUserByName = async (req: Request, res: Response): Promise<void> =>{
    try {
        const data: InputData = {
            name: req.query.name as string,
            type: (req.query.type as USER_TYPE),
            orderBy: req.query.orderBy as string,
            orderType: req.query.orderType as string,
            page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
        };

        if (!data.name) {
            throw new Error("Por favor, insira um nome para filtrar.");
        };

        const result = await filterUserByName(data);
        
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