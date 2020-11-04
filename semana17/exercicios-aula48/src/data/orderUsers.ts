import { connection } from '../index';
import { InputData, User } from '../types';

export default async function orderUsers(data: InputData):Promise<User[]> {
   const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      ORDER BY ${data.orderBy} ${data.orderType}
   `);

   return result[0];
 };