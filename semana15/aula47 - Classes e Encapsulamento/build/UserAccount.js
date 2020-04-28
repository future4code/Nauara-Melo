"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(cpf, name, age, transactions) {
        this.balance = Number(0);
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        this.balance += value;
    }
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map