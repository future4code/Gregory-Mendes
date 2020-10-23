import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net'

const app: Express = express();

app.use(express.json());
app.use(cors());

type userInfo = {
    name: string,
    cpf: string,
    dateOfBirth: string,
    balance: number,
    statement: statementInfo[]
};

type statementInfo = {
    spendingAmount: number,
    description: string,
    date: string
};


let users: Array<userInfo> = [
    {
        name: "Greg",
        cpf: "001.001.001.01",
        dateOfBirth: "15/12/1997",
        balance: 0,
        statement: [
            {
                spendingAmount: 100,
                description: "Roupas",
                date: "14/10/2020"
            }
        ]
    },

    {
        name: "Caio",
        cpf: "002.011.001.02",
        dateOfBirth: "17/04/1985",
        balance: 5500,
        statement: [
            {
                spendingAmount: 250,
                description: "Lanches",
                date: "17/05/2020"
            },

            {
                spendingAmount: 100,
                description: "Cinema",
                date: "22/08/2020"
            }
        ]
    }
];

app.get("/users/", (req: Request, res: Response): void => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send("Erro ao tentar ver usuários. Tente novamente.")
    };
});

app.post("users", (req: Request, res: Response) =>)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log("Servidor pronto!");
    } else {
       console.error(`Falha ao tentar abrir o servidor. Tente novamente.`);
    };
});
