// literal types

type Programmer = 'Programmer';
type HR = 'HR';

let bestProgrammer: Programmer = 'Programmer';

// literal union types

type PositionType = Programmer | HR;

type Position =
    | 'Programmer'
    | 'HR'
    | 'CEO'

function getSalaryForPosition(position: Position): number | undefined {
    if (position === 'Programmer') {
        return 1000;
    }
    if (position === 'HR') {
        return 500;
    }
    console.warn(`We don't have a salary for ${position}`); // The thing in the backticks is called a template literal
}