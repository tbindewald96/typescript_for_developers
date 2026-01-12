
function greet(name: string) {
    return ('Hello, ' + name);
}

const johnGreet = greet('John');

function greetToUpperCase(name: string) {
    return ('Hello, ' + name.toUpperCase());
}

const greetToConsole = (name: string) => { // arrow function
    console.log('Hello, ' + name);
}

function greetMultiple(...names: string[]) { // ... spread operator
    names.forEach(name => {
        greetToConsole(name);
    });
}