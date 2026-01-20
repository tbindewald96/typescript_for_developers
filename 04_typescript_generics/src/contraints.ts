export {}

type objectWithTeam = {
    team: string
}

type Programmer = objectWithTeam & {
    name: string,
    language: string
}

function updateTeam<T extends objectWithTeam>(arg: objectWithTeam, newTeam: string){
    arg.team = newTeam;
    return arg;
}

let empl1: Programmer = {
    name: 'John',
    language: 'C#',
    team: 'CoolTeam'
}

updateTeam(empl1, 'SuperCoolTeam')

type OldSchoolProgrammer<T extends 'Basic' | 'Lisp'> = {
    language: T,
    name: string
}

const myCoolColleague: OldSchoolProgrammer<'Basic'> = {
    language: 'Basic',
    name: 'John'
}