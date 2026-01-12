import { randomBytes } from 'crypto'

type Employee = {
    name: string
    id: string
    email: string
    salary: number
}

function generateRandomId() {
    return randomBytes(10).toString('hex');
}

function createEmployee(employeeName: string, salary: number): Employee {
    return{
        name: employeeName,
        id: generateRandomId(),
        email: `${employeeName}@company.com`,
        salary: salary
    }
}

const Peter = createEmployee('Peter', 50000)
const Daniel = createEmployee('Daniel', 60000)

//export declare function createEmployee (employeeName: string, salary: number): Employee; // declaration: export function