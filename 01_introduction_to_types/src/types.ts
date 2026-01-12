// Type aliases. define the shape of an object

type Position = 'Programmer' | 'Manager' | 'Director';

const myPosition: Position = 'Programmer';

type Colleague = {
    name: string;
    age : number;
    position: Position;
    greetBack?: Function;
};

const myColleague: Colleague = {
    name: 'Alice',
    age: 30,
    position: 'Manager',
};

const myOtherColleague: {
    name: string;
    age : number;
    position: Position;
    tasks: string[];
} = {
    name: 'Bob',
    age: 25,
    position: 'Programmer',
    tasks: ['Code', 'Review'],
}

const myTalkyColleague: Colleague = {
    name: 'Charlie',
    age: 28,
    position: 'Director',
    greetBack: () => {
        console.log('Hello!');
    }
};

function greetColleague(colleague: Colleague) {
    console.log('Hi' + colleague.name);
    if (colleague.greetBack) {
        colleague.greetBack();
    }
}

greetColleague(myColleague);
greetColleague(myOtherColleague);
greetColleague(myTalkyColleague);