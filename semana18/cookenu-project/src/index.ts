import express, { Express } from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
    if (server) {
        console.log("Server is running on port 3003.")
    } else {
        console.error("Failure upon starting server")
    };
});