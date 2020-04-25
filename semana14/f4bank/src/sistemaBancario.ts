import { writeFileSync, readFileSync } from 'fs'
import * as moment from "moment";
moment.locale("pt-br");

type bankAccount = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    extract: transaction[]
}

type transaction = {
    value: number,
    date: string,
    description: string
}

function hasAgePermited(birthDate: string): boolean {

    const today = moment(new Date(), "DD/MM/YYYY");
    const dateBirth = moment(birthDate, "DD/MM/YYYY");
    const differenceInYears = today.diff(dateBirth, "years")

    if (differenceInYears >= 18) {
        return true
    } else {
        console.log("Usuário com idade não permitida.")
        return false
    }
}

function hasExistCpf(accounts: bankAccount[], newAccount: bankAccount): boolean {

    for (let account of accounts) {
        if (account.cpf === newAccount.cpf) {
            console.log("CPF já cadastrado.")
            return true
        }
    }

    return false
} 

function saveInJson(accounts: bankAccount[]): void {
    try {
        writeFileSync('./files/accounts.json', JSON.stringify(accounts))
    } catch (error) {
        console.log('Por favor, tente novamente')
    }
}

function createAccount(account: bankAccount): void {
    const accounts: bankAccount[] = getAllAccounts()

    if (hasAgePermited(account.birthDate) && !hasExistCpf(accounts, account)) {
        accounts.push(account)
        saveInJson(accounts)
        console.log('Conta cadastrada com sucesso!')
    }
}

function getAllAccounts(): bankAccount[] {
    try {
        const data = readFileSync('./files/accounts.json')
        const accounts: bankAccount[] = JSON.parse(data.toString())
        
        return accounts
    } catch (err) {
        console.error(err)
    }
}

function getAccountByNameAndCpf(name: string, cpf: string, accounts?: bankAccount[]): bankAccount {
    const bankAccounts: bankAccount[] = accounts || getAllAccounts()

    const account: bankAccount = bankAccounts.find(
        account => account.name === name && account.cpf === cpf
    )

    return account
}

function getBalance(name: string, cpf: string): number {
    
   const account: bankAccount = getAccountByNameAndCpf(name, cpf)

    return account.balance
}

function addBalance(name: string, cpf: string, value: number): void {
    
    const allAccounts: bankAccount[] = getAllAccounts()

    const account: bankAccount = getAccountByNameAndCpf(name, cpf, allAccounts)

    account.balance += value

    saveInJson(allAccounts)

    console.log("Saldo atualizado com sucesso.")
}


function run(): void {
    const operation = process.argv[4]

    if (operation === 'create') {
        const account: bankAccount = {
            name: process.argv[5],
            birthDate: process.argv[6],
            cpf: process.argv[7],
            balance: 0.00,
            extract: []
        }

        createAccount(account)
    }

    if (operation === 'getAccounts') {
        console.log(getAllAccounts())
    }

    if (operation === 'addBalance') {
        const name: string = process.argv[5]
        const cpf: string = process.argv[6]
        const value: number = Number(process.argv[7])

        addBalance(name, cpf, value)
    }

    if (operation === 'getBalance') {
        const name: string = process.argv[5]
        const cpf: string = process.argv[6]

        console.log(`O saldo do usuário: ${name} com cpf: ${cpf} é R$: ${getBalance(name, cpf).toFixed(2)}`)
    }
}

run()