"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commerce_1 = require("./Commerce");
class CommercialClient extends Commerce_1.Commerce {
    constructor(name, registrationNumber, consumedEnergy, cnpj, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
    calculateBill() {
        return this.consumedEnergy * 0, 53;
    }
    ;
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=CommercialClient.js.map