import { Request, Response } from 'express';
import orderUsers from '../data/orderUsers';
import { InputData, USER_TYPE } from '../types';


export const getUsersByOrder = async(req: Request, res: Response): Promise<void> =>{
    try {
        const data: InputData = {
            name: req.query.name as string,
            type: req.query.type as USER_TYPE,

        };

        console.log(data)
        const users = await orderUsers(data);

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