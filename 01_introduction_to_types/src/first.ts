type UserName = {
    name: string;
    };

async function printName(arg: UserName) {
    console.log(arg.name);
}

printName({
    name: 'John'
})