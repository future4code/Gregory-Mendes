import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/countries/All", (req: Request, res: Response) => {
    const result = countries.map((country) => {
        return {
            id: country.id,
            name: country.name
        }
    })
    
    res.status(200).send(result);
});



app.listen(3004, () => {
    console.log("Servidor pronto!");
})