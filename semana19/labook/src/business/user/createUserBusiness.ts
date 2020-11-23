import UserDatabase from "../../data/UserDatabase";
import { CustomError } from "../../errors/CustomError"
import { User, UserInput } from "../../model/User";
import Authenticator from "../../service/Authenticator";
import HashManager from "../../service/HashManager";
import IdGenerator from "../../service/IdGenerator";

export const createUserBusiness = async (input: UserInput): Promise<string> => {
    try {
        if (
            !input.name ||
            !input.email || 
            !input.password
        ) {
            throw new CustomError(406, "Preencha todos os campos.");
        };

        const id = IdGenerator.generateId();
        const cypherPassword = await HashManager.hash(input.password);

        const newUser: User = new User(
            id,
            input.name,
            input.email,
            cypherPassword
        );

        await UserDatabase.signup(newUser);

        const token = Authenticator.generateToken({id});

        return token;
    } catch (error) {
        throw new CustomError(401, "Não foi possível se cadastrar.");    
    };
};