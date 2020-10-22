import express, {Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// Exercício 1
// A e B - Devemos usar o método GET e a entidade deve ser o path "/users"

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

// Exerício 2
// A e B - 

app.get("/users/:type", (req: Request, res: Response): void =>{
    let errorCode: number = 400;
    
    try{
        enum UserType {
            ADMIN = "ADMIN",
            NORMAL = "NORMAL"
        }

        type user = {
            id: number,
            name: string,
            email: string,
            type: UserType,
            age: number,
        }

        const usersByType = users.filter((user)=>user.type === req.params.type)
        
        if(!req.params.type) {
            errorCode = 404
            throw new Error();
        }

        res.status(200).send(usersByType);
    }catch(error){
        res.status(errorCode).send({
            message: "Error searching for user by type. User not found."
        });
    }
});

app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id,
            name,
            email,
            age,
            type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
