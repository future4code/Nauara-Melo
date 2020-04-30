"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResidentialClient_1 = require("./ResidentialClient");
const CommercialClient_1 = require("./CommercialClient");
const IndustrialClient_1 = require("./IndustrialClient");
const ClientManager_1 = require("./ClientManager");
const residentialclient = new ResidentialClient_1.ResidentialClient('Bartolomeu', 2, 35, '123.456.789-12', 4, '58040-400');
const comercialClient = new CommercialClient_1.CommercialClient('Faustina', 3, 3526547, '1236544571548454', 4, '580500-500');
const industrialClient = new IndustrialClient_1.IndustrialClient('Joaquina', 4, 854656, '565845', 250, '580600-600');
const myClients = new ClientManager_1.ClientManager();
myClients.addClient(industrialClient);
myClients.addClient(comercialClient);
myClients.addClient(residentialclient);
console.log(myClients.calculateTotalIncome());
//# sourceMappingURL=index.js.map