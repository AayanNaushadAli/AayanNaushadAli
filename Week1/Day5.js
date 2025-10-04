// Day 5: 10 Small Problems
// Implement these exercises below. Remove these comments and write your solutions.

// 1) FizzBuzz: function fizzBuzz(n) { /* ... */ }

// 2) Factorial: function factorial(n) { /* ... */ }

// 3) Reverse string: function reverseString(s) { /* ... */ }

// 4) Palindrome check: function isPalindrome(s) { /* ... */ }

// 5) Sum of array: function sumArray(arr) { /* ... */ }

// Add more small problems here (e.g., find primes, fibonacci, flatten array, etc.)

// When you're ready, run this file with Node or open it in the browser console to test.


// Example implementation for FizzBuzz
function fizzBuzz(n) {
    const out = [];
    for (let i = 1; i <= n; i++){
        if (i % 15 === 0) out.push('FizzBuzz');
        else if (i % 3 === 0) out.push('Fizz');
        else if (i % 5 === 0) out.push('Buzz');
        else out.push(i);
    }
    return out;
}


// Example implementation for Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}


// Example implementation for Reverse String

function reverseString(s) {
    return s.split('').reverse().join('');
}


// Example implementation for Palindrome Check

function isPalindrome(s) {
    const cleaned = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Example implementation for Sum of Array

function sumArray(arr16) {
    let sum = 0;
    for (let i of arr16) sum += i;
    return sum;
}


// Example implementation for Finding Primes in an Array

function findPrimes(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}
let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("primes in array [1-10]: ", findPrimes(arr17));
// Example implementation for Fibonacci Sequence

function fibonacci(n) {
    const out = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        out.push(a);
        [a, b] = [b, a + b];
    }
    return out;
}


// Example implementation for Flattening an Array

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

let nestedArr = [1, [2, [3, 4], 5], 6];
console.log("flattened array: ", flattenArray(nestedArr));

// Example implementation for Finding Maximum in an Array
function findMax(arr) {
    return Math.max(...arr);
}
let arr18 = [3, 5, 7, 2, 8];
console.log("maximum in array [3,5,7,2,8]: ", findMax(arr18));

// Example runs — only execute when file run directly
if (typeof require !== 'undefined' && require.main === module) {
    console.log('fizzBuzz(15):', fizzBuzz(15));
    console.log('factorial of 5 is: ', factorial(5));
    console.log("reverse of 'hello' is: ", reverseString("hello"));
    console.log("is 'racecar' a palindrome? ", isPalindrome("racecar"));
    console.log("is 'hello' a palindrome? ", isPalindrome("hello"));
    console.log("sum of array [1,2,3,4,5] is: ", sumArray([1, 2, 3, 4, 5]));
    console.log("primes in array [1-10]: ", findPrimes([1,2,3,4,5,6,7,8,9,10]));
    console.log("first 10 Fibonacci numbers: ", fibonacci(10));
    console.log("flattened array: ", flattenArray([1, [2, [3, 4], 5], 6]));
    console.log("maximum in array [3,5,7,2,8]: ", findMax(arr18));
}

// Export functions for tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fizzBuzz,
        factorial,
        reverseString,
        isPalindrome,
        sumArray,
        findPrimes,
        fibonacci,
        flattenArray,
        findMax
    };
}

