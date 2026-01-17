export {}

// enums: a group of constants
enum Position {
    Programmer,
    HR,
    CEO
}

type Employee = {
    name: string
    salary: number
    position: Position
}

function payBonus (empl: Employee) {
    if (empl.position === Position.CEO) {
        // surprise bonus
    }
}

type PositionType = 
    | 'Programmer'
    | 'HR'
    | 'CEO'

function payAnnualBonus(empl: Employee) {
    let bonusPercent: number = 0;
    switch (empl.position) {
        case Position.Programmer:
            bonusPercent = 0.2
            break;
        case Position.HR:
            bonusPercent = 0.8
            break;
        case Position.CEO:
            bonusPercent = 200
            break;
        default:
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`)
}