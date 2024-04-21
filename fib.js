#!/usr/bin/env node
//the above line is called a shebang line, it tells the shell to execute the script with the node interpreter
// this means that you can run the script with the following command: ./fib.js
// we can't normally run a JavaScript file with the ./ syntax, but the shebang line allows us to do so


// This is an iteration implementation of the Fibonacci sequence in JavaScript.
// input: number, output: array containing the Fibonacci sequence up to the input number
// example: fib(8) = [0, 1, 1, 2, 3, 5, 8, 13]

function fib(n){
    let sequence = [0, 1];
    for (let i = 2; i < n; i++){
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence;
}

function printArray(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

let myArray = fib(8);
console.log("Iterative Fibonacci sequence:");
printArray(myArray);

// Run the script with the following command: ./fib.js or node fib.js

// Below is the recursive implementation of the Fibonacci sequence in JavaScript.

function fibR(n){
    let sequence = [0, 1];
    if (n < 2){
        return sequence;
    } else {
        let result = fibR(n-1); // we create result to store the sequence and avoid recalculating the sequence
        // we push the sum of the last two elements of the sequence to the result array
        result.push(result[result.length-1] + result[result.length-2]);
        return result;
    }
}

let myRecursiveArray = fib(8);
console.log("Recursive Fibonacci sequence:");
printArray(myRecursiveArray);