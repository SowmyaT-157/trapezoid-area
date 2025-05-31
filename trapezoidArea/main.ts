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



function add(a: number, b: number): number{
    return a + b
}
const input1 = Number(prompt('enter value for a:'));
const input2 = Number(prompt('enter value for b:'));

if(isNaN(input1) || isNaN(input2)){
    console.log("enter a valid input");
}
else{
    const result = add(input1,input2);
    console.log(`output: ${result}`)
}