"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(fileManager) {
        this.fileManager = fileManager;
    }
    hasAgePermited(age) {
        if (age >= 18) {
            return true;
        }
        else {
            console.log("Usuário com idade não permitida.");
            return false;
        }
    }
    hasExistCpf(accounts, newAccount) {
        for (let account of accounts) {
            if (account.getCpf() === newAccount.getCpf()) {
                console.log("CPF já cadastrado.");
                return true;
            }
        }
        return false;
    }
    createAccount(account) {
        const accounts = this.getAllAccounts();
        if (this.hasAgePermited(account.getAge()) && !this.hasExistCpf(accounts, account)) {
            accounts.push(account);
            this.fileManager.writeObjectToFile(accounts);
            console.log('Conta cadastrada com sucesso!');
        }
    }
    getAllAccounts() {
        const accounts = [];
        console.log();
        for (let teste of this.fileManager.getObjectFromFIle()) {
            teste.getCpf();
        }
        return accounts;
    }
    getAccountByCpf(cpf, accounts) {
        const UserAccounts = accounts || this.getAllAccounts();
        const account = UserAccounts.find(account => account.getCpf() === cpf);
        return account;
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map