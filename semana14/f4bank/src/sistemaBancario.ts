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

    console.log(accounts)

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
        console.log('Conta cadastrada com sucesso!')
    } catch (error) {
        console.log('Por favor, tente novamente')
    }
}

function createAccount(account: bankAccount): void {
    const accounts: bankAccount[] = getAllAccounts()

    if (hasAgePermited(account.birthDate) && !hasExistCpf(accounts, account)) {
        accounts.push(account)
        saveInJson(accounts)
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

function getBalance(name: string, cpf: string): number {
    
   const account: bankAccount = getAllAccounts().find(
       account => account.name === name && account.cpf === cpf
    )

    return account.balance
}



const account: bankAccount = {
    name: 'Aderbal Piragibe',
    birthDate: '21/12/1989',
    cpf: '123.321.123-32',
    balance: 0.00,
    extract: []
}


/* createAccount(account) */
/* console.log(getAllAccounts()) */
console.log(getBalance("Aderbal Piragibe", "123.321.123-32")) 