import { Request, Response } from 'express';
import orderUsers from '../data/orderUsers';
import { InputData, USER_TYPE } from '../types';


export const getUsersByOrder = async(req: Request, res: Response): Promise<void> =>{
    try {
        const data: InputData = {
            name: req.query.name as string || `${"a"}%`,
            type: req.query.type as USER_TYPE,
            orderBy: req.query.orderBy as string || "name",
            orderType: (req.query.orderType as string).toUpperCase() || "ASC"
        };

        const validOrderByValues = ["name", "type"];

        if(!validOrderByValues.includes(data.orderBy)) {
            throw new Error("Os valores de 'orderBy' devem ser 'name' ou 'type'");
        };

        const validOrderTypeValues = ["ASC", "DESC"];
        
        if(!validOrderTypeValues.includes(data.orderType)) {
            throw new Error("Os valores de 'orderType' devem ser 'ASC' ou 'DESC'");
        }

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