import { connection } from '../index';
import { InputData, User } from '../types';

export default async function orderUsers(data: InputData):Promise<User[]> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE name LIKE "%${data.name}%"
       ORDER BY "name"
    `);
 
    return result[0];
 };