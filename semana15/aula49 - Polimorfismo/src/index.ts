import { ResidentialClient } from './ResidentialClient';
import { Client } from './Client';
import { Place } from './Place';
import { Residence } from './Residence';
import { Commerce } from './Commerce';
import { Industry } from './Industry';
import { CommercialClient } from './CommercialClient';
import { IndustrialClient } from './IndustrialClient';
import { ClientManager } from './ClientManager';

//EXERCICIO 1 

/*const residentialclient = new ResidentialClient ("Alfredo", 1, 10)
console.log(`O cliente ${residentialclient.name}, numero de registro ${residentialclient.registrationNumber} teve o consumo de energia de R$ ${residentialclient.consumedEnergy}, tendo como valor total da conta de energia ${residentialclient.calculateBill()}.`) */

//Resposta no terminal: O cliente Alfredo, numero de registro 1 teve o consumo de energia de 10, tendo como valor total da conta de energia R$ 2.
//a) Imprimi todas, mas não coloquei a função na classe ClientResidential com arrow function.

//EXERCICIO 2

/* const place = new Place ("58000-000")
console.log(place.getCep()) */

//a)Cannot create an instance of an abstract class.
//b) I don't know =(

//EXERCICIO 3

/* //Residence
const residence = new Residence(4, '58010-100')
console.log(residence.getCep())

//Commerce
const commerce = new Commerce(3, '58020-200')
console.log(commerce.getCep())

//Industry
const industry = new Industry(20, '58030-300') 
console.log(industry.getCep())
*/

//EXERCICIO 4

const residentialclient = new ResidentialClient ('Bartolomeu', 2, 35, '123.456.789-12', 4, '58040-400')
/* console.log(`O cliente ${residentialclient.name}, de registro ${residentialclient.registrationNumber} e CPF ${residentialclient.getCpf()} obteve o consumo de energia de ${residentialclient.consumedEnergy} na residência de CEP: ${residentialclient.getCep()}, totalizando o valor de R$ ${residentialclient.calculateBill()}`)  */

/* a) Propriedades: nome, numero de registro, consumo de energia, cpf, quantidade de residentes, cep
métodos: Pegar quantidade de residentes, calcular o valor da conta,  pegar cep e cpf */

//EXERCICIO 5 

const comercialClient = new CommercialClient('Faustina', 3, 3526547, '1236544571548454', 4, '580500-500')
/* console.log(`A cliente de nome ${comercialClient.name}, registro de número ${comercialClient.registrationNumber} e CNPJ ${comercialClient.getCnpj()}, obteve o consumo de ${comercialClient.consumedEnergy} kw/h no endereço de CEP ${comercialClient.getCep()} com ${comercialClient.getFloorsQuantity()} andares, totalizando o valor de R$ ${comercialClient.calculateBill()} `)  */

//a) Semelhanças: mesmos parâmetros, com exceção do cpnj/cpf
//b) Diferenças: mudança de cpf para cnpj, o tipo do imovel e o valor da taxa de consumo.

//EXERCICIO 6

const industrialClient = new IndustrialClient('Joaquina', 4, 854656, '565845', 250, '580600-600')
/* console.log(`A cliente de nome ${industrialClient.name}, registro de número ${industrialClient.registrationNumber} e CNPJ ${industrialClient.getIndustryNumber()}, obteve o consumo de ${industrialClient.consumedEnergy} kw/h no endereço de CEP ${industrialClient.getCep()} com ${industrialClient.getMachinesQuantity()} máquinas, totalizando o valor de R$ ${industrialClient.calculateBill()} `) */

//a) Da classe Industry, pois precisa do número de máquinas para calcular a o valor da conta de energia;
//b) A interface Client, pois precisa ter acesso ao método calculateBill() para o calculo do valor da conta de energia.
//c) Pelo fato de não ser necessário fazer modificações nos dados.

//EXERCICIO 7 

const myClients = new ClientManager()
myClients.addClient(industrialClient)
myClients.addClient(comercialClient)
myClients.addClient(residentialclient)
/* console.log(myClients.getClientsQuantity()) */

//EXERCICIO 8

console.log(myClients.calculateTotalIncome())



