import express, { Express } from 'express';
import cors from 'cors';
import knex from "knex";
import dotenv from 'dotenv';
import login from './endpoints/login';
import signUp from './endpoints/signup';
import { getUserByIdAuth } from './endpoints/getUserByIdAuth';
import { deleteUser } from './endpoints/deleteUser';
import { getUserById } from './endpoints/getUserById';

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

app.post("/signup", signUp);
app.post("/login", login);

app.get("/user/profile", getUserByIdAuth);
app.get("/user/:id", getUserById);

app.delete("/user/:id", deleteUser);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       console.log(`Server is running...`);
    } else {
       console.error(`Failure upon starting server.`);
    };
});