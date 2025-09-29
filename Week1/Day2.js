// day 2 : JS basics - operators, conditionals, loops

// operators
let a = 10;
let b = 5;
console.log("a + b =", a + b); // addition
console.log("a - b =", a - b); // subtraction
console.log("a*b =", a * b); // multiplication
console.log("a / b =", a / b); // division
console.log("a % b =", a % b); // modulus
console.log("a ** b =", a ** b); // exponentiation
console.log("++a =", ++a); // increment
console.log("--b =", --b); // decrement

// conditionals
let age = 20;
if (age < 18) {
  console.log("Minor");
}else if (age >= 18 && age < 65) {
    console.log("Adult");
}else {
    console.log("Senior");
}

// switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

