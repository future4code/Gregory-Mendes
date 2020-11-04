import { Request, Response } from 'express';
import selectFiveUsers from '../data/selectFiveUsers';
import { InputData, USER_TYPE } from '../types';

export const getFiveUsers = async(req: Request, res: Response): Promise<void> =>{
    try {

        const data: InputData = {
            name: req.query.name as string,
            type: req.query.type as USER_TYPE,
            orderBy: req.query.orderBy as string || "name",
            orderType: (req.query.orderType as string) || "ASC",
            page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
        };
        
        const users = await selectFiveUsers(data)

        if(!users.length){
            res.statusCode = 404
            throw new Error("Usuários não encontrados")
        };
 
       res.status(200).send(users)
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    };
};