import express, { Express } from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';
import { createUser } from './endpoints/createUser';
import { getAllUsers } from './endpoints/getAllUsers';
import { getUserById } from './endpoints/getUserById';
import { createTask } from './endpoints/createTask';
import { getTaskById } from './endpoints/getTaskById';
import { editUser } from './endpoints/editUsers';

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

app.post("/user", createUser);
app.post("/task", createTask);

app.get("/user/all", getAllUsers);
app.get("/user/:id", getUserById);
app.get("/task/:id", getTaskById);

app.put("/user/edit/:id", editUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       console.log(`Server is running...`);
    } else {
       console.error(`Failure upon starting server.`);
    };
});
 