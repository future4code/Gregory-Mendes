import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';
import { getActorById } from './endpoints/getActorById';

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1 - A: Uma query feita com o raw retorna um array com 2 posições. 
// A primeira representa as informações solicitadas e outro, informações complexas (Field Packets)


// Exercício 1 - B
app.get("/actors/search/:id", getActorById);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        console.log("Server is running!");
    } else {
        console.log("Failure upon starting server.");
    };
});