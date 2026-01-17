"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Project {
    name;
    budget;
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
    }
    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`);
    }
}
const coolProject = new Project('CoolProject', 10000);
coolProject.printBudget();
//# sourceMappingURL=company.js.map