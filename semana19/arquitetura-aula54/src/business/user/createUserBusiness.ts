import { Response } from 'express';
import { insertUser } from '../../data/insertUser';
import { generateToken } from '../../services/authenticator';
import { hash } from '../../services/hashManager'
import { generateId } from '../../services/idGenerator';

export const createUserBusiness = async (user: any): Promise<string> => {
    try {

        if (!user.name || !user.email || !user.password || !user.role) {
            throw new Error("Preencha todos os campos.");
        };

        if (user.email.includes("@") === -1) {
            throw new Error("E-mail inválido");
        };

        if (user.password.length < 6) {
            throw new Error("A senha deve ter mais de 6 caracteres");  
        };

        const id: string = generateId();
        const cypherPassword = await hash(user.password);

        await insertUser(id, user.email, user.name, cypherPassword, user.role);

        const token = generateToken({id, role: user.role});

        return token;
    } catch (error) {
        throw new Error( error.message || "Erro ao tentar criar usuário.");
    };
};