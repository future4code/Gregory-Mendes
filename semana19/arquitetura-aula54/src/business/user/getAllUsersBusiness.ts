import { selectAllUsers } from "../../data/selectAllusers";
import { getTokenData } from "../../services/authenticator";

export const getAllUsersBusiness = async (token: string): Promise<any> => {
    try {
        getTokenData(token);

        return await selectAllUsers()
    } catch (error) {
        throw new Error(error.message);
    };
};