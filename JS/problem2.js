// Problem 2: Feet to Inches

function feetToInches(feet) {

    let inches = feet * 12;

    return inches;
}

let feet = prompt("How many feet?");
let inches = feetToInches(feet);
console.log(`There are ${inches} inches in ${feet} feet.`);