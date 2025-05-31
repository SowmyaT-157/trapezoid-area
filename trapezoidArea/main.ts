console.log("trapezoid area....")

import promptSync from 'prompt-sync';

const prompt = promptSync();

function divideByTwo(value: number): number{
    return value / 2
}
const input = Number(prompt("enter a number:"))

if (isNaN(input)){
    console.log("enter a valid input")
}
else{
    const result = divideByTwo(input);
    console.log(`Output:${result}`)
}