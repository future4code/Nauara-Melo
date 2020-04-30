import { Commerce } from "./Commerce";
import { Place } from "./Place";

export class CommercialClient extends Commerce implements Place{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string,
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string{
        return this.cnpj
    }

    public calculateBill(): number{
        return this.consumedEnergy * 0,53
    };
}