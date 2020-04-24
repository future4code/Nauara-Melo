import { writeFileSync, readFileSync } from 'fs'
import * as moment from "moment";
moment.locale("pt-br");

type bankAccount = {
    name: string,
    cpf: string,
    birthDate: string
}

type transaction = {
    value: number,
    date: string,
    description: string
}

function hasAgePermited(birthDate: string) {

    const today = moment(new Date(), "DD/MM/YYYY");
    const dateBirth = moment(birthDate, "DD/MM/YYYY");
    const differenceInYears = dateBirth.diff(today, "years")

    return differenceInYears >= 18 
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
    accounts.push(account)

    if (hasAgePermited(account.birthDate)) {
        saveInJson(accounts)
    } else {
        console.log("Usuário com idade não permitida.")
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

const account: bankAccount = {
    name: 'Aderbal Piragibe',
    birthDate: '21/12/1989',
    cpf: '123.321.123-32'
}

/* createAccount(account) */
console.log(getAllAccounts())