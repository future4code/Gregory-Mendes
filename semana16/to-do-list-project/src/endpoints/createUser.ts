import { Request, Response } from 'express';
import { createNewUser } from '../data/createNewUser';
import { User } from '../types';
import { users } from '../index'

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, nickname, email} = req.body;

        const userNickname: User | undefined = users.find((user) => 
            user.nickname === nickname
        );

        const userEmail: User | undefined = users.find((user) => 
            user.email === email
        );
        
        if (userNickname === name) {
            res.statusCode = 409;
            throw new Error("Apelido já existe.");
        };

        if (userEmail === email) {
            res.statusCode = 409;
            throw new Error("E-mail já existe.");
        };

        if (name === "" || nickname === "" || email === "") {
            res.statusCode = 400
            throw new Error ("Por favor, preencha todos os campos.");
        };

        await createNewUser(name, nickname, email);
        
        res.status(201).send("Usuário criado com sucesso!");
    } catch (error) {
        res.send(error.message);
    };
};