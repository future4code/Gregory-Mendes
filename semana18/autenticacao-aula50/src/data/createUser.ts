import { connection } from '../index';

export async function createUser(
    id: string,
    email: string, 
    password: string
): Promise<void> {
    await connection("aula50_exercicios")
    .insert({
        id,
        email,
        password
    });
};