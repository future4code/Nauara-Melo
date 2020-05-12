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
        console.log('Conta cadastrada com sucesso!');
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
function getAccountByNameAndCpf(name, cpf, accounts) {
    const bankAccounts = accounts || getAllAccounts();
    const account = bankAccounts.find(account => account.name === name && account.cpf === cpf);
    return account;
}
function getBalance(name, cpf) {
    const account = getAccountByNameAndCpf(name, cpf);
    return account.balance;
}
function addBalance(name, cpf, value) {
    const allAccounts = getAllAccounts();
    const account = getAccountByNameAndCpf(name, cpf, allAccounts);
    account.balance += value;
    saveInJson(allAccounts);
    console.log("Saldo atualizado com sucesso.");
}
function run() {
    const operation = process.argv[4];
    if (operation === 'create') {
        const account = {
            name: process.argv[5],
            birthDate: process.argv[6],
            cpf: process.argv[7],
            balance: 0.00,
            extract: []
        };
        createAccount(account);
    }
    if (operation === 'getAccounts') {
        console.log(getAllAccounts());
    }
    if (operation === 'addBalance') {
        const name = process.argv[5];
        const cpf = process.argv[6];
        const value = Number(process.argv[7]);
        addBalance(name, cpf, value);
    }
    if (operation === 'getBalance') {
        const name = process.argv[5];
        const cpf = process.argv[6];
        console.log(`O saldo do usuário: ${name} com cpf: ${cpf} é R$: ${getBalance(name, cpf).toFixed(2)}`);
    }
}
run();
//# sourceMappingURL=sistemaBancario.js.map