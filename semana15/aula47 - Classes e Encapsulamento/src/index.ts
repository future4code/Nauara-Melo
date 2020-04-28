import { UserAccount } from './UserAccount';
import { JSONFileManager} from './JSONFileManager';
import { Bank } from './Bank';

 
// Requisito 1
/* const userAccount: UserAccount = new UserAccount('123.123.123-65', 'Aderbal Pirangibe', Number(20)); */
const bank: Bank = new Bank(new JSONFileManager('accounts.json'));

/* bank.createAccount(userAccount); */

bank.getAllAccounts()

// Requisito 2