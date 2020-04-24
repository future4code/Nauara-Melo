"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function saveInJson(accounts) {
    try {
        fs_1.writeFileSync('./files/accounts.json', JSON.stringify(accounts));
        console.log('Conta cadastrada com sucesso!');
    }
    catch (error) {
        console.log('Por favor, tente novamente');
    }
}
function createAccount(account) {
    const accounts = getAllAccounts();
    accounts.push(account);
    saveInJson(accounts);
}
function getAllAccounts() {
    try {
        const data = fs_1.readFileSync('./files/accounts.json');
        const accounts = JSON.parse(data.toString());
        return accounts;
    }
    catch (err) {
        console.error(err);
    }
}
const account = {
    name: 'Aderbal Piragibe',
    birthDate: '21/12/1989',
    cpf: '123.321.123-32'
};
console.log(getAllAccounts());
//# sourceMappingURL=sistemaBancario.js.map