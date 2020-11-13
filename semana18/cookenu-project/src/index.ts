import express, { Express } from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';
import { signup } from './enpoints/signup';
import { login } from './enpoints/login';
import { getProfile } from './enpoints/getProfile';
import { getProfileById } from './enpoints/getProfileById';
import { createRecipe } from './enpoints/createRecipe';
import { getRecipeById } from './enpoints/getRecipeById';
import { getRecipeFeed } from './enpoints/getRecipeFeed';

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

app.post("/signup", signup);
app.post("/login", login);
app.post("/recipe", createRecipe); 
app.post("/user/feed", getRecipeFeed); 

app.get("/user/profile", getProfile);
app.get("/user/:id", getProfileById);
app.get("/recipe/:id", getRecipeById);

const server = app.listen(3003, () => {
    if (server) {
        console.log("Server is running on port 3003.")
    } else {
        console.error("Failure upon starting server")
    };
});