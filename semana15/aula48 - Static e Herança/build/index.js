"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Seller_1 = require("./Seller");
const seller = new Seller_1.Seller('bartô', 'bartolomeu@gmail.com', 'Bartolomeu', 'senhaacesso', new Date(2015, 5, 2), 2500);
seller.setSalesQuantity(15);
console.log(`O salário total do vendedor ${seller.getName()} foi ${seller.calculateTotalSalary()}`);
//# sourceMappingURL=index.js.map