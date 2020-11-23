import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import knex from 'knex';
import { getAllUsers } from './endpoints/getAllUsers';
import { searchUserByName } from './endpoints/searchUserByName';
import { searchUserByType } from './endpoints/searchUserByType';
import { getUsersByOrder } from './endpoints/getUsersByOrder';
import { getFiveUsers } from './endpoints/getFiveUsers';
import { mainEndpoint } from './endpoints/mainEndpoint';

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users/all", getAllUsers);
app.get("/users/search", searchUserByName);
app.get("/users/searchByType/:type", searchUserByType);
app.get("/users/order", getUsersByOrder);
app.get("/users/limit", getFiveUsers);
app.get("/users/main", mainEndpoint);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       console.log(`Server is running...`);
    } else {
       console.error(`Failure upon starting server.`);
    };
});