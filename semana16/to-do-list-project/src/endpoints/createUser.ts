import { Request, Response } from 'express';
import { createNewUser } from '../data/createNewUser';
import { User } from '../types';
import { selectAllUsers } from '../data/selectAllUsers';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {

        const { name, nickname, email } = req.body;

        const users: User[] = await selectAllUsers();
        
        if (name === "" || nickname === "" || email === "") {
            res.statusCode = 400
            throw new Error ("Por favor, preencha todos os campos.");
        };

        const userNickname: User | undefined = users.find(
            user => user.nickname === nickname
        );
        
        const userEmail: User | undefined = users.find(
            user => user.email === email
        );
        
        if (userNickname?.nickname === nickname) {
            res.statusCode = 409
            throw new Error("Nickname already exists")
        }
        
        if (userEmail?.email === email) {
            res.statusCode = 409
            throw new Error("E-mail already exists")
        };
        
        await createNewUser(name, nickname, email);
        
        res.status(201).send("Usuário criado com sucesso!");
    } catch (error) {
        console.log(error);
        res.send(error.message);
    };
};