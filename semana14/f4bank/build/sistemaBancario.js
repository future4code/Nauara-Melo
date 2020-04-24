"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
moment.locale("pt-br");
function hasAgePermited(birthDate) {
    const today = moment(new Date(), "DD/MM/YYYY");
    const dateBirth = moment(birthDate, "DD/MM/YYYY");
    const differenceInYears = today.diff(dateBirth, "years");
    if (differenceInYears >= 18) {
        return true;
    }
    else {
        console.log("Usuário com idade não permitida.");
        return false;
    }
}
function hasExistCpf(accounts, newAccount) {
    console.log(accounts);
    for (let account of accounts) {
        if (account.cpf === newAccount.cpf) {
            console.log("CPF já cadastrado.");
            return true;
        }
    }
    return false;
}
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
    if (hasAgePermited(account.birthDate) && !hasExistCpf(accounts, account)) {
        accounts.push(account);
        saveInJson(accounts);
    }
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
function getBalance(name, cpf) {
    const account = getAllAccounts().find(account => account.name === name && account.cpf === cpf);
    return account.balance;
}
const account = {
    name: 'Aderbal Piragibe',
    birthDate: '21/12/1989',
    cpf: '123.321.123-32',
    balance: 0.00,
    extract: []
};
console.log(getBalance("Aderbal Piragibe", "123.321.123-32"));
//# sourceMappingURL=sistemaBancario.js.map