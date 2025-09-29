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

// questio 1 : check divisble of 5 

    let num = prompt("Enter a number:");
    if (num % 5 === 0) {
        coonsole.log(num + " is divisible by 5");
    }else {
        console.log(num + " is not divisible by 5");
    }

// question 2 : check the grade of the students 

    let marks = prompt("Enter your marks:");
    if (marks >= 90) {
        console.log("A+");
    }else if (marks >= 80) {
        console.log("A");
    }
    else if (marks >= 70) {
        console.log("B+");
    }
    else if (marks >= 60) {
        console.log("B");
    }
    else if (marks >= 50) {
        console.log("C");
    }
    else if (marks >= 40) {
        console.log("D");
    }
    else {
        console.log("F");
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

// questio 2 : check the grade of the students 


// loops : for loop, while loop, do-while loop , for ... of loop, for ... in loop

// for loop

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// while loop

let x = 1;
while (x <= 5) {
    console.log("While Number:", x);
    x++;
}

// do-while loop

let y = 1;
do {
    console.log("Do-While Number:", y);
    y++;
}while (y <= 5);





