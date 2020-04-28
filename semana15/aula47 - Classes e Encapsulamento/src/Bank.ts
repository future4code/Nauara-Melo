import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";
import * as moment from "moment";

export class Bank { 
    
   private accounts: UserAccount[];
   private fileManager: JSONFileManager;

    constructor(fileManager: JSONFileManager ) {
        this.fileManager = fileManager;
    }

    private hasAgePermited(age: number): boolean {
    
        if (age >= 18) {
            return true
        } else {
            console.log("Usuário com idade não permitida.")
            return false
        }
    }
    
    private hasExistCpf(accounts: UserAccount[], newAccount: UserAccount): boolean {
    
        for (let account of accounts) {
            if (account.getCpf() === newAccount.getCpf()) {
                console.log("CPF já cadastrado.")
                return true
            }
        }
    
        return false
    } 

    public createAccount(account: UserAccount): void {
        const accounts = this.getAllAccounts()

        if(this.hasAgePermited(account.getAge()) && !this.hasExistCpf(accounts, account)) {
            accounts.push(account);
            this.fileManager.writeObjectToFile(accounts)
            console.log('Conta cadastrada com sucesso!')
        }
    }

    public getAllAccounts(): UserAccount[] {
        const accounts: UserAccount[] = []
        
        console.log()

        for(let teste of this.fileManager.getObjectFromFIle()) {
            teste.getCpf()
        }

        return accounts
    }

    public getAccountByCpf(cpf: string, accounts?: UserAccount[]): UserAccount {

        const UserAccounts: UserAccount[] = accounts|| this.getAllAccounts()
        
        const account: UserAccount = UserAccounts.find(
            account => account.getCpf() === cpf
        )

        return account
    }

}