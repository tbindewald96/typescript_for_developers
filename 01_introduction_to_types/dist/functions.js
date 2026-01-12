"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return ('Hello, ' + name);
}
const johnGreet = greet('John');
function greetToUpperCase(name) {
    return ('Hello, ' + name.toUpperCase());
}
const greetToConsole = (name) => {
    console.log('Hello, ' + name);
};
function greetMultiple(...names) {
    names.forEach(name => {
        greetToConsole(name);
    });
}
//# sourceMappingURL=functions.js.map