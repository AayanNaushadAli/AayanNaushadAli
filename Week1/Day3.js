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

function cube(num){
  return num * num * num;
}

console.log("cube of 3 is: ", cube(3));

// function for leap year
function isLeapYear(year){

  return year % 4 === 0 && year % 100 !== 0 ? (year + " is leap year.") : 
        (year + " this year is not leap year")
}

let year = 2020;
console.log(isLeapYear(year));

// funtion of grading using ternary operator 

function grade(marks){
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
function sumArray(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArray([10, 15, 14, 17]));
console.log(sumArray([19, 10, 24, 17]));
console.log(sumArray([10, 45, 14, 77]));
console.log(sumArray([]));

// using for .. off loop to create the sum of the number inside the array 

function sumArray1(arr){
  let sum = 0;
  for (let num of arr){
    sum += num;
  }
  return sum;
}

console.log(sumArray1([10, 15, 14, 17]));
console.log(sumArray1([19, 10, 24, 17]));
console.log(sumArray1([10, 45, 14, 77]));
console.log(sumArray1([]));


// function for pront even number from 1 to n 

function printEvenNum(n){
  for(let i = 0; i <= n; i++){
    if(i % 2 === 0){
      console.log(i);
    }
  }
}

console.log(printEvenNum(10));

// another method for sum function 

function printEven(n){
  for(let i = 2; i <= n; i+=2){
    console.log(i);
  }
}

console.log(printEven(10));

// concatination function 

function getFullName(User){
  return User.firstName + " " + User.lastName;
}

let person = { 
  firstName : "Aayan",
  lastName : "Naushad"
}

console.log(getFullName(person));


// array push pop shift unshift slice concate indexof 

// push : add element to begeining


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
