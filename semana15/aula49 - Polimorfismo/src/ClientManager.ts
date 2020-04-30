import { Client } from './Client';

export class ClientManager{
    private clients: Client[] = [];

    public getClientsQuantity(): number{
        return this.clients.length
    }

    public addClient(client: Client): void{
        this.clients.push(client)
    }


    public calculateTotalIncome(): number{
        let ammount: number = 0

        for (const client of this.clients) {
            ammount += client.calculateBill() 
        }

        return ammount
    }
}