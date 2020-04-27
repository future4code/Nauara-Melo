import { Transaction } from "./Transaction"

export class UserAccount {

    private balance: number = Number(0);
    private cpf: string;
    private name: string;
    private age:number; 
    private transactions: Transaction[]

    constructor(cpf: string, name: string, age:number, transactions?: Transaction[]) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }

    public getBalance(): number {
        return this.balance
    }

    public addBalance(value: number): void {
        this.balance += value
    }

    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }
}