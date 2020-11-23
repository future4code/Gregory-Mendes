import { User } from "../model/User";
import BaseDatabase from "./BaseDatabase"

class UserDatabase extends BaseDatabase {
    private static tableName: string = "labook_users";
    
    public signup = async (user: User): Promise<void> => {
        try {
            await BaseDatabase.connection(UserDatabase.tableName)
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            });
        } catch (error) {
            throw new Error(error.message || error.sqlMessage);
        };
    };
};

export default new UserDatabase();
