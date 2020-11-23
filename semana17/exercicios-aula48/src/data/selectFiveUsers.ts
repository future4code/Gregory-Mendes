import { off } from 'process';
import { connection } from '../index';
import { InputData, User } from '../types';

export default async function selectFiveUsers(data: InputData):Promise<User[]> {
    const usersPerPage: number = 5;
    const offset: number = usersPerPage * (data.page - 1)
    
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       LIMIT 5
       OFFSET ${offset}
    `)
 
    return result[0]
 }