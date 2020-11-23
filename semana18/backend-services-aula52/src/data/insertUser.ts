import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES,
    logradouro: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string,
    complemento: string
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role
    }).into('to_do_list_users')

    await connection.insert({
        user_id: id,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    }).into("to_do_list_user_address")
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}