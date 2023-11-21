// Exercise : Debugging JavaScript Functions
// Objective: Identify and fix issues in JavaScript functions.

// This code snippet with a JavaScript function that performs a specific task, but contains bugs or inefficiencies.
// Debug the function and ensure it works correctly and efficiently.

// Code:



// ERROR: semicolon missing at line 20.
// solution:semicolon added



function calculateSum(arr) 
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
    {
       sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log(result); // Should output 15
