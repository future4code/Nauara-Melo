import { User } from './User';
import { Customer } from './Customer'; 
import { Employee } from './Employee';
import { Seller } from './Seller';

//EXERCICIO 1 

/* const user: User = new User ('fulano', 'fulano@gmail.com', 'Fulano de Tal', 'senhaacesso')
console.log(`Id: ${user.getId()}, Nome: ${user.getName()}, Email: ${user.getEmail()}`) */

//a) Nesse momento não, só seria possivel se houvesse um getPassword().
//b) Uma vez, pois só foi criado uma instância da classe user. 

//EXERCICIO 2 

/* const customer: Customer = new Customer ('beltrano', 'beltrano@gmail.com', 'Beltrano', 'senhaacesso', '8540 6521 2852 6532')
console.log(`Id: ${customer.getId()}, Nome: ${customer.getName()}, Email: ${customer.getEmail()}, Cartão de Crédito: ${customer.getCreditCard()}.`) */

//a) Uma vez, pois só foi criada uma instância da classe Customer
//b) Duas vezes, pois foram criadas duas instâncias da classe User, uma do user Fulano e uma do customer Beltrano, uma vez que a classe Customer é filha de User e chama o constructor da mesma.

//EXERCICIO 3 

/* const customer: Customer = new Customer ('beltrano', 'beltrano@gmail.com', 'Beltrano', 'senhaacesso', '8540 6521 2852 6532')
console.log(`Id: ${customer.getId()}, Nome: ${customer.getName()}, Email: ${customer.getEmail()}, Cartão de Crédito: ${customer.getCreditCard()}, Valor Total de Compra: ${customer.purchaseTotal}.`) */

//a) Ainda não, pois o password é um atributo privado que não possui método de acesso. 

//EXERCICIO 4 

/* const customer: Customer = new Customer ('beltrano', 'beltrano@gmail.com', 'Beltrano', 'senhaacesso', '8540 6521 2852 6532')
console.log(`${customer.interoduceYourself()}, Id: ${customer.getId()}, Nome: ${customer.getName()}, Email: ${customer.getEmail()}, Cartão de Crédito: ${customer.getCreditCard()}, Valor Total de Compra: ${customer.purchaseTotal}.`) */

//EXERCICIO 5 

/* const customer: Customer = new Customer ('beltrano', 'beltrano@gmail.com', 'Beltrano', 'senhaacesso', '8540 6521 2852 6532')
console.log(`${customer.interoduceYourself()}, Id: ${customer.getId()}, Nome: ${customer.getName()}, Email: ${customer.getEmail()}, Cartão de Crédito: ${customer.getCreditCard()}, Valor Total de Compra: ${customer.purchaseTotal}.`) */

//EXERCICIO 6 

/* const employee: Employee = new Employee ('cilano', 'ciclano@gmail.com', 'Ciclano', 'senhaacesso', new Date(2019,11,17), 2.500)
console.log(`${employee.interoduceYourself()}, Id: ${employee.getId()}, Email: ${employee.getEmail()}, Nome: ${employee.getName()}, Data de admissão: ${employee.getAdmissionDate()}, Salário: ${employee.getBaseSalary()}`) */

//a) Uma vez. 
//b) InteroduceYourself, Id, email, nome, data de admissão, salário.

//EXERCICIO 7 

/* const employee: Employee = new Employee ('cilano', 'ciclano@gmail.com', 'Ciclano', 'senhaacesso', new Date(2019,11,17), 2500)
console.log(`${employee.interoduceYourself()}, Id: ${employee.getId()}, Email: ${employee.getEmail()}, Nome: ${employee.getName()}, Data de admissão: ${employee.getAdmissionDate()}, Salário Base: ${employee.getBaseSalary()}, Salário Total: ${employee.calculateTotalSalary()}`) */

//EXERCICIO 8 

/* const seller: Seller = new Seller ('alfredo', 'alfredo@gmail.com', 'Alfredo', 'senhaacesso', new Date(2015,10,3), 2500) */

//a) Os mesmos parametros necessários a classe "Pai" Employee. (id, email, name, password, admission Date, Base Salary)
//b) Não consegui imprimir o password, pois é um atributo privado e não possui um método público.
/* console.log(`Id: ${seller.getId()}`)
console.log(`Email: ${seller.getEmail()}`)
console.log(`Nome: ${seller.getName()}`)
console.log(`Data de Admissão: ${seller.getAdmissionDate()}`)
console.log(`Base Salarial: ${seller.getBaseSalary()}`)
console.log(`Salário Total(salário base + beneficios): ${seller.calculateTotalSalary()}`) */

//EXERCICIO 9

/* const seller: Seller = new Seller ('alfredo', 'alfredo@gmail.com', 'Alfredo', 'senhaacesso', new Date(2015,10,3), 2500)
seller.setSalesQuantity(10)
console.log(`Quantidade de vendas do ${seller.getName()} foi ${seller.getSalesQuantity()}`) */

//a) Sim, devido ao método auxiliar getSalesQunatity

//EXERCICIO 10

/* const seller: Seller = new Seller ('bartô', 'bartolomeu@gmail.com', 'Bartolomeu', 'senhaacesso', new Date(2015,5,2), 2500,)
seller.setSalesQuantity(15)
console.log(`O salário total do vendedor ${seller.getName()} foi ${seller.calculateTotalSalary()}`) */

//EXERCICIO 11

/* const seller: Seller = new Seller ('bartô', 'bartolomeu@gmail.com', 'Bartolomeu', 'senhaacesso', new Date(2015,5,2), 2500,)
seller.setSalesQuantity(15)
console.log(`O salário total do vendedor ${seller.getName()} foi ${seller.calculateTotalSalary()}`) */


