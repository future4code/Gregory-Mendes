import { signup } from "../../controller/user/signup";

export const createUserBusiness = async (user: any) => {
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
    } catch (error) {
        
    };
};