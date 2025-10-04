// Day 4: Functions deep dive

// 1) Function declaration (hoisted)
function sayHello(name) {
    return 'Hello, ' + name;
}
console.log(sayHello('Aayan'));

// 2) Function expression (not hoisted)
const greet = function (name) {
    return `Hi, ${name}`;
}
console.log(greet('Aayan'));

// 3) Arrow function
const add = (a, b) => a + b;
console.log('add(2,3) ->', add(2, 3));

// 4) Default parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log('multiply(5) ->', multiply(5));

// 5) Rest parameters
function sumAll(...nums) {
    return nums.reduce((s, n) => s + n, 0);
}
console.log('sumAll(1,2,3,4) ->', sumAll(1, 2, 3, 4));

// 6) IIFE (Immediately Invoked Function Expression)
(function () {
    console.log('IIFE ran');
})();

// 7) Callback example
function doOperation(a, b, operation) {
    return operation(a, b);
}
console.log('doOperation:', doOperation(5, 3, (x, y) => x - y));

// 8) Simple closure example
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const c = counter();
console.log(c());
console.log(c());

// Exercises for you to implement below:
// - Write a function factorialRecursive(n) using recursion
// - Write an isPrime(n) function (returns true/false)
// - Convert a callback-based function to return a Promise (practice async style)

// When done, run: node .\\Week1\\Day4.js

// factorial using recursion

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n *factorialRecursive(n - 1);
    }
}

console.log("factorial of 5 using recursion is: ", factorialRecursive(5));

// isPrime function

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("is 7 prime? ", isPrime(7));
console.log("is 10 prime? ", isPrime(10));
console.log("is 3 prime? ", isPrime(3));

// Convert a callback-based function to return a Promise

function asyncOperation(a, b, callback) {
    setTimeout(() => {
        const result = a + b;
        callback(result);
    }, 1000);
}
function asyncOperationPromise(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = a + b;
            resolve(result);
        }, 1000);
    });
}

asyncOperation(2, 3, (result) => {
    console.log("Callback result:", result);
});

// Example: using async/await with the Promise-based version
async function runAsyncExample() {
    try {
        const res = await asyncOperationPromise(4, 6);
        console.log('async/await result:', res);
    } catch (err) {
        console.error('Async error:', err);
    }
}

runAsyncExample();

// Export selected functions for testing (Node)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        factorialRecursive,
        isPrime,
        asyncOperationPromise
    };
}
