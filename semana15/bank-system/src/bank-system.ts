import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());

type userAccount = {
    name: string,
    cpf: string,
    dateOfBirth: Date,
    balance: number,
    statement: statementInfo[]
};

type statementInfo = {
    spendingAmount: number,
    description: string,
    date: string
};

let users: Array<userAccount> = [
    {
        name: "Greg",
        cpf: "001.001.001.01",
        dateOfBirth: new Date(),
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
        dateOfBirth: new Date ("17/04/1985"),
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
        if(!users.length) {
            res.statusCode = 404;
            throw new Error("Erro ao tentar ver usuários. Tente novamente.")
        };

        res.status(200).send(users);
    } catch (error) {
        res.send(error.message);
    };
});

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const {name, cpf, dateOfBirth} = req.body;
        const [day, month, year] = dateOfBirth.split("/");
        
        const formatedBirthDate: Date = new Date(`${year}-${month}-${day}`)

        const age: number = Date.now() - formatedBirthDate.getTime();
        const ageInYears: number = age / 1000 / 60 / 60 / 24 / 365;
        
        if (ageInYears < 18) {
            errorCode = 403
            throw new Error("Criação de conta negada. Idade deve ser maior que 18 anos.");
        } else {
            users.push({
                name: name,
                cpf: cpf,
                dateOfBirth: formatedBirthDate,
                balance: 0,
                statement: []
            });
            res.status(200).send("Conta criada com sucesso!")
        }
    } catch (error) {
        res.send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       console.log("Servidor pronto!");
    } else {
       console.error(`Falha ao tentar abrir o servidor. Tente novamente.`);
    };
});
