import { connection } from '../index';
import { Actor } from '../types';

export const selectActorByName = async (name: string): Promise<Actor[]> => {
    try {
        const result = await connection.raw (`
            SELECT * FROM Actor WHERE name LIKE "%${name}%"
        `);
        
        console.log(result);
        return result[0][0];
    } catch (error) {
        console.log(error);
        return [];
    };
};