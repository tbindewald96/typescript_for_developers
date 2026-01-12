let queryResult: any = 5;

queryResult = 'Hello World';

queryResult = true;

function getSalaryFromExternalService(employeeId: number): unknown { // unknown type: safer than any
    return JSON.parse('5000');
}

let salary = getSalaryFromExternalService(123);