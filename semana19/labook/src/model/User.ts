export type AuthenticationData = {
    id: string
};

export class User {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) {};
    
    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password

    public setName (newName: string) {
        this.name = newName;
    };

    public setEmail (newEmail: string) {
        this.email = newEmail;
    };

    public setPassword (newPassword: string) {
        this.password = newPassword;
    };
};

export type UserInput = {
    name: string,
    email: string,
    password: string
};

export type UserOutput = {
    token: string
};