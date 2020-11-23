import { selectUserByEmail } from '../../data/selectUserByEmail';
import { generateToken } from '../../services/authenticator';
import { hashCompare } from '../../services/hashManager'

export const selectUserByEmailBusiness = async (user: any): Promise<any> => {
    try {
        if (!user.email || !user.password) {
            throw new Error("Preencha todos os campos.");
        };

        if (user.email.includes("@") === -1) {
            throw new Error("E-mail inválido");
        };

        if (user.password.length < 6) {
            throw new Error("Senha inválida");  
        };

        const userData = await selectUserByEmail(user.email);

        const passwordIsValid: boolean = await hashCompare(user.password, userData.password);
        
        if (!passwordIsValid) {
            throw new Error("Usuário não encontrado ou senha incorreta");
        };

        const token: string = generateToken({id: userData.id, role: userData.role});

        return {
            id: userData.id,
            role: userData.role,
            token
        }
    } catch (error) {
        throw new Error(error.message);
    };
};