import { Request, Response } from 'express';
import { createNewTask } from '../data/createNewTask';
import { Task } from '../types';


export const createTask= async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, limitDate, creatorUserId }: Task = req.body;

        const [day, month, year] = limitDate.split("/");

        const limitDateConverted: Date = new Date(`${year}-${month}-${day} (GMT-3)`);

        console.log(limitDateConverted)
        
        if (title === "" ||description === "" ||
            limitDate === "" || creatorUserId === "") {
            res.statusCode = 400
            throw new Error ("Por favor, preencha todos os campos.");
        };
        
        await createNewTask(title, description, limitDateConverted, creatorUserId);
        
        res.status(201).send("Tarefa criada com sucesso!");
    } catch (error) {
        console.log(error);
        res.send(error.message);
    };
};