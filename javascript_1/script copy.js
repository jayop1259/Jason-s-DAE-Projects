// DOM Interaction
let myHeading = document.getElementById( "myHeading" );
myHeading.innerHTML = "I have put text on the page with JavaScript. Hello my name is Jace and today is May 20, 2025. The time is 4:45."

// Alert
alert("Hello");

// Descriptive variables and data types
let age = 16;
const birthYear = 2008
let name = "Jace"; // String data type

// Decision making with if/else
if (age >= 16) {
    console.log("You are a teenager");
} else {
    console.log("Be positive!");
}

// Logical operators
if (age >= 18 && age <= 30) {
    console.log("You are in your twenties or late teens");
}

if (age < 18 || age > 30) {
    console.log("You are under 18 or over 30");
}

let isMinor = age < 18;
if (!isMinor) {
    console.log("You are not a minor");
}

// Mathematical operation
let currentYear = 2025;
let calculatedAge = currentYear - birthYear;
console.log("Calculated age:", calculatedAge);




