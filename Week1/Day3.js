const { partialParse } = require("openai/_vendor/partial-json-parser/parser.mjs");

// simple function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// function call
greet("Aayan");
greet("Aayan Naushad Ali");

// defualt parameter 

function greetUser(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greetUser();
greetUser("Aayan Naushad Ali");

//sum function
function addition(e) {
  let sum = sum2(5, 10);
  document.getElementById("result").innerHTML = "sum: " + sum;
}

function sum2(a, b) {
  return a + b;
}

console.log("Sum:", sum2(5, 10));

// multiplication of the 2 numbers

function multiply(a, b) {
  return a * b;
}

let productResult = multiply(5, 10);
console.log("Product:", productResult);
console.log("multiplication: ", multiply(7, 8));

// square of a number

function square(num) {
  return num * num;
}

console.log("Square of 4 is:", square(4));

// even odd checker function

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(8));
console.log(isEven(7));


// max of 2 number 

function max(a, b) {
  return a > b ? a : b;
}

console.log(max(20, 10));


// factorial 
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log("factorial of 5 is: ", factorial(5));

// cube of the number 

function cube(num) {
  return num * num * num;
}

console.log("cube of 3 is: ", cube(3));

// function for leap year
function isLeapYear(year) {

  return year % 4 === 0 && year % 100 !== 0 ? (year + " is leap year.") :
    (year + " this year is not leap year")
}

let year = 2020;
console.log(isLeapYear(year));


// arrow function 

// square using arrow function 
const square1 = (n) => n * n;
console.log(square1(7));

// sum using arrow funtion 
const sum1 = (a, b) => a + b;
console.log(sum1(5, 6));






// funtion of grading using ternary operator 

function grade(marks) {
  return marks >= 90 ? "A+" :
    marks >= 80 ? "A" :
      marks >= 70 ? "B" :
        marks >= 60 ? "C" :
          marks >= 50 ? "D" : "F";
}

console.log(grade(82));
console.log(grade(91));
console.log(grade(43));

// function for sum of number inside the array 
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArray([10, 15, 14, 17]));
console.log(sumArray([19, 10, 24, 17]));
console.log(sumArray([10, 45, 14, 77]));
console.log(sumArray([]));

// using for .. off loop to create the sum of the number inside the array 

function sumArray1(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray1([10, 15, 14, 17]));
console.log(sumArray1([19, 10, 24, 17]));
console.log(sumArray1([10, 45, 14, 77]));
console.log(sumArray1([]));


// function for pront even number from 1 to n 

function printEvenNum(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

console.log(printEvenNum(10));

// another method for sum function 

function printEven(n) {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

console.log(printEven(10));

// concatination function 

function getFullName(User) {
  return User.firstName + " " + User.lastName;
}

let person = {
  firstName: "Aayan",
  lastName: "Naushad"
}

console.log(getFullName(person));


// array push pop shift unshift slice concate indexof 

// push : add element to end


let fruits = ["mango", "banana"];
console.log("original Fruits Array()");
console.log(fruits, "\n");

console.log("push()");
fruits.push("apple");
console.log(fruits, "\n");

//pop : remove the last element 
console.log("pop()");
let removed = fruits.pop()
console.log(fruits);
console.log(removed, "\n");

fruits.push("apple"); // inserting again apple for shift funtion
console.log(fruits);

//shift : remove 1st element of the element 
console.log("shift()");
removed = fruits.shift();
console.log(fruits);
console.log(removed, "\n");


//  concatation : add 2 number 
let arr1 = [1, 2];
let arr2 = [3, 4];

let arr3 = arr1.concat(arr2);
console.log(arr3, "\n");

// slice : only show the portion after removing, it doest originally change tha array

let arr5 = [10, 20, 30, 40, 50];
let part = arr5.slice(1, 4);

console.log(part);
console.log(arr5);

// splice : remove/add/replace 

arr5.splice(2, 2, 99, 100); // array.splice(start, deleteCount, item1, item2, ...)
console.log(arr5);


// indexOf :
let fruits1 = ["apple", "banana", "mango"];
console.log(fruits1.indexOf("banana"));
console.log(fruits1.indexOf("grapes"));

// includes :

let fruits2 = ["apple", "banana", "mango"];
console.log(fruits2.includes("banana")); // true
console.log(fruits2.includes("grapes")); // false


//  question 1 : for day 3 dlete 2 elememnts from index 2 

let arr6 = [10, 20, 30, 40, 50];

arr6.splice(2, 2);
console.log(arr6);

// question 2 : day 3 add 3 and 4 in the array [1, 2, 5, 6]

let arr7 = [1, 2, 5, 6];

arr7.splice(2, 0, 3, 4);
console.log(arr7);

// Question 3 : 

let arr8 = ["red", "green", "blue"];

arr8.splice(1, 1, "yellow");
console.log(arr8);

// question 4 :

let arr9 = [100, 200, 300];

arr9.push(400);
console.log(arr9); // [100, 200, 300, 400]

arr9.unshift(0);
console.log(arr9); // [0, 100, 200, 300, 400]

arr9.pop();
console.log(arr9); // [0, 100, 200, 300]

arr9.shift();
console.log(arr9); // [100, 200, 300]

// question 5 :

let arr10 = [1, 2, 3];
let arr11 = [4, 5, 6];

let arr12 = arr10.concat(arr11);
console.log(arr12);

let part1 = arr12.slice(2, 5);
console.log(part1);
console.log(arr12.includes(5));

// function that return vowel form the strings 
function vowel(word) {
  let count1 = 0;
  for (let i of word) {
    if (i === "a" || i === "i" || i === "e" || i === "o" || i === "u" || i === "A" || i === "E" || i === "I" || i === "O" || i === "U") {
      count1++;
      console.log(i);
    }

  }
  console.log("total number is vowel: ", count1);
}

console.log(vowel("Aayan"));

// forEach funtion 

let arr13 = [10, 20, 30, 40, 50];

arr13.forEach(function (num) {
  console.log(num);
}
);

// square of the number using forEach

console.log("square of the number using forEach");
let arr14 = [2, 3, 5];
arr14.forEach(function (num) {
  console.log(num * num);
}
);

// using arrow function
console.log("using arrow function");

arr14 = [2, 3, 5];
arr14.forEach((num) => {
  console.log(num * num);
}
);

// map function

