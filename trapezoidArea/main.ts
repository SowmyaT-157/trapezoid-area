console.log("trapezoid area....")

import promptSync from 'prompt-sync';

const prompt = promptSync();

function divideByTwo(value: number): number{
    return value / 2
}
// const input = Number(prompt("enter a number:"))

// if (isNaN(input)){
//     console.log("enter a valid input")
// }
// else{
//     const result = divideByTwo(input);
//     console.log(`Output:${result}`)
// }


function multiply(base: number, height: number): number {
  return base * height;
}

const base = Number(prompt('Enter base value b: '));
const h = Number(prompt('Enter height value h: '));

if (isNaN(base) || isNaN(h)) {
  console.log('Please enter valid numeric values.');
} else {
  const result = multiply(base, h);
  console.log(`Output: ${result}`); 
}



