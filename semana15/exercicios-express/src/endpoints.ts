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
        };
    });

    res.status(200).send(result);
});

app.get("/countries/search", (req: Request, res: Response) => {
    let result: country[] | undefined = countries;

    try {
        if(!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error();
        };

        if (req.query.name) {
            result = result.filter((country) => 
                country.name.toLowerCase().includes(req.query.name as string)
            );
        };
        
        if (req.query.capital) {
            result = result.filter((country) => 
                country.capital.toLowerCase().includes(req.query.capital as string)
            ); 
        };
        
        if (req.query.continent) {
            result = result.filter((country) => 
                country.continent.toLowerCase().includes(req.query.continent as string)
            );
        };
        
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send("Parâmetros não foram preenchidos!");
    }
});

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find((country) =>
        country.id === Number(req.params.id)
    );

    if (result) {
        res.status(200).send(result);
    } else {
        res.status(404).send("Not found");
    };
});

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    
    try {
        type body = {
            name: string,
            capital: string
        }

        const {name, capital}: body = req.body;
        
    
        const countryIndex = countries.findIndex((country) =>
            country.id === Number(req.params.id)
        );
    
        if (countryIndex === -1) {
            throw new Error();
        }
    
        countries[countryIndex].name = name;
        countries[countryIndex].capital = capital;
    
        res.status(200).send({message: "O país foi editado com sucesso!"})
        
    } catch (error) {
        res.status(400).send({message: "Erro ao tentar editar o país."})
    }
});

app.listen(3004, () => {
    console.log("Servidor pronto!");
});