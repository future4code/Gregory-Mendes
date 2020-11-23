import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { getAdressInfo } from "../services/getAdressInfo";
import { hash } from "../services/hashManager";
import {generateId} from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {
        const body = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            cep: req.body.cep,
            numero: req.body.numero,
            complemento: req.body.complemento
        }

        if (!body) {
          throw new Error('Preencha os todos os campos')
        }

        const id: string = generateId()
        
        const cypherPassword = await hash(body.password);

        const adressByCep = await getAdressInfo(body.cep)

        console.log(adressByCep)

        await insertUser(
            id,
            body.name,
            body.nickname,
            body.email,
            cypherPassword,
            body.role,
            adressByCep.logradouro,
            Number(body.numero),
            body.complemento,
            adressByCep.bairro,
            adressByCep.cidade,
            adressByCep.estado
        )

         const token: string = generateToken({
            id,
            role: req.body.role
         })

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}