type bonusPercent = 10 | 20 | 30;

type Salary = {
    amount: number;
    currency: 'USD' | 'EUR'
    yearlyBonus?: bonusPercent
}

type Employee = {
    name: string;
    salary: Salary;
}

const JohnSalary: Salary = {
    amount: 50000,
    currency: 'USD',
    yearlyBonus: 20
}

const john: Employee = {
    name: 'John',
    salary: {
        amount: 50000,
        currency: 'USD',
    }
}

function paySalary(empl: Employee, extraWork?: string) {
    console.log(`Payed ${empl.salary.amount} ${empl.salary.currency} to ${empl.name}`)
    if (empl.salary.yearlyBonus) {
        console.log(`${empl.name} received a yearly bonus of ${empl.salary.yearlyBonus}`)
    }
    if (extraWork) {
        console.log(`${empl.name} did extra work: ${extraWork}`)
    }
}

paySalary(john)
paySalary(john, 'Code reviews')