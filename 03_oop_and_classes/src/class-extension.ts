class Project {

    name: string;
    budget: number;

    constructor(name: string, budget: number){
        this.name = name;
        this.budget = budget;
    }

    printBudget(){
        console.log(`${this.name} has a budget of ${this.budget}`)
    }
}

class SecretProject extends Project {

    secrecyLevel: 1 | 2 | 3

    constructor(secrecyLevel: 1 | 2 | 3) {
        super('Secret project', 1000000); //super calls constructor of base class
        this.secrecyLevel = secrecyLevel
    }
}

const secretProject = new SecretProject(3);
secretProject.printBudget();