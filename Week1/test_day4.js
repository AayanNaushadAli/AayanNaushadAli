const assert = require('assert');
const { factorialRecursive, isPrime, asyncOperationPromise } = require('./Day4');

// Test factorialRecursive
assert.strictEqual(factorialRecursive(0), 1, '0! should be 1');
assert.strictEqual(factorialRecursive(1), 1, '1! should be 1');
assert.strictEqual(factorialRecursive(5), 120, '5! should be 120');

console.log('factorialRecursive tests passed');

// Test isPrime
assert.strictEqual(isPrime(2), true, '2 is prime');
assert.strictEqual(isPrime(3), true, '3 is prime');
assert.strictEqual(isPrime(4), false, '4 is not prime');
assert.strictEqual(isPrime(17), true, '17 is prime');

console.log('isPrime tests passed');

// Test asyncOperationPromise (async/await)
(async () => {
  const res = await asyncOperationPromise(3, 7);
  try {
    assert.strictEqual(res, 10, '3+7 should be 10');
    console.log('asyncOperationPromise test passed');
  } catch (err) {
    console.error('asyncOperationPromise test failed', err);
    process.exit(1);
  }
})();
