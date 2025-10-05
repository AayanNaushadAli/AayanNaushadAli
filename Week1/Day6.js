// Day 6: Array helpers practice

// TODO: Implement these functions yourself as practice. Replace the placeholders below.

// 1) filterOdd(arr): return only odd numbers
function filterOdd(arr) {
  // implement me
  return arr.filter(x => x % 2 !== 0);
}


// 2) sumSquares(arr): use reduce to sum squares
function sumSquares(arr) {
  // implement me
}

// 3) findFirstPrime(arr): return first prime number or undefined
function findFirstPrime(arr) {
  // implement me
}

// 4) groupBy(arr, fn): group array items by key returned from fn
function groupBy(arr, fn) {
  // implement me
}

// 5) removeDuplicates(arr): return array with duplicates removed (preserve order)
function removeDuplicates(arr) {
  // implement me
}

// Export functions for tests (when you implement them)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { filterOdd, sumSquares, findFirstPrime, groupBy, removeDuplicates };
}

// Test filterOdd
console.log('filterOdd([1,2,3,4,5]):', filterOdd([1,2,3,4,5]));



