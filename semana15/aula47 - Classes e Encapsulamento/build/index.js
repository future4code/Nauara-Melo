"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const Bank_1 = require("./Bank");
const bank = new Bank_1.Bank(new JSONFileManager_1.JSONFileManager('accounts.json'));
bank.getAllAccounts();
//# sourceMappingURL=index.js.map