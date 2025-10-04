const assert = require('assert');
const { fizzBuzz, factorial, reverseString, isPalindrome, sumArray } = require('./Day5');

// fizzBuzz
const fb15 = fizzBuzz(15);
assert.strictEqual(fb15[14], 'FizzBuzz', '15th value should be FizzBuzz');
assert.strictEqual(fb15[2], 'Fizz', '3rd value should be Fizz');
assert.strictEqual(fb15[4], 'Buzz', '5th value should be Buzz');
console.log('fizzBuzz tests passed');

// factorial
assert.strictEqual(factorial(0), 1);
assert.strictEqual(factorial(5), 120);
console.log('factorial tests passed');

// reverseString
assert.strictEqual(reverseString('abc'), 'cba');
console.log('reverseString tests passed');

// isPalindrome
assert.strictEqual(isPalindrome('Race car'), true);
assert.strictEqual(isPalindrome('hello'), false);
console.log('isPalindrome tests passed');

// sumArray
assert.strictEqual(sumArray([1,2,3,4,5]), 15);
console.log('sumArray tests passed');

console.log('All Day5 tests passed');
