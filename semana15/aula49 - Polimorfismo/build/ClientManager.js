"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    getClientsQuantity() {
        return this.clients.length;
    }
    addClient(client) {
        this.clients.push(client);
    }
    calculateTotalIncome() {
        let ammount = 0;
        for (const client of this.clients) {
            ammount += client.calculateBill();
        }
        return ammount;
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=ClientManager.js.map