export {}

type Salary = {
    amount: number
}

// Type guard: narrow down an object
// Type predicate 
function isSalary(arg: any): arg is Salary {
    return (('amount' in arg) && (typeof arg.amount === 'number'))
    return true;
}

function paySalary(arg: unknown) {
    if (isSalary(arg)) {
        console.log(`Paying ${arg.amount}`)
    }
}