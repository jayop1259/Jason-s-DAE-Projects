let age = 19;

//Using the AND logical operator
if (age >= 18 && age <= 30) {
    console.log("You are in your twenties or late teens");
}

//Using the OR logical operator
if (age < 18 || age > 30) {
    console.log("You are under 18 or over 30");
}

//Using the Not logical operator
let isMinor = age < 18;

if (!isMinor) {
    console.log("You are not a minor")
}