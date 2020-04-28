"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
class Seller extends Employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    getSalesQuantity() {
        return this.salesQuantity;
    }
    setSalesQuantity(quantity) {
        this.salesQuantity = quantity;
    }
    calculateTotalSalary() {
        return (this.baseSalary +
            Employee_1.Employee.BENEFITS_VALUE +
            Seller.SELLING_COMMISSION * 5);
    }
}
exports.Seller = Seller;
Seller.SELLING_COMMISSION = 5;
//# sourceMappingURL=Seller.js.map