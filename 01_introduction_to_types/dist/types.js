"use strict";
// Type aliases. define the shape of an object
Object.defineProperty(exports, "__esModule", { value: true });
const myPosition = 'Programmer';
const myColleague = {
    name: 'Alice',
    age: 30,
    position: 'Manager',
};
const myOtherColleague = {
    name: 'Bob',
    age: 25,
    position: 'Programmer',
    tasks: ['Code', 'Review'],
};
const myTalkyColleague = {
    name: 'Charlie',
    age: 28,
    position: 'Director',
    greetBack: () => {
        console.log('Hello!');
    }
};
function greetColleague(colleague) {
    console.log('Hi' + colleague.name);
    if (colleague.greetBack) {
        colleague.greetBack();
    }
}
greetColleague(myColleague);
greetColleague(myOtherColleague);
greetColleague(myTalkyColleague);
//# sourceMappingURL=types.js.map