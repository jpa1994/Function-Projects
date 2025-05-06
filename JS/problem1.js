// Problem 1: Rectangle area

function areaOfRectangle(length, width) {

    let area = length * width;

    return area;
}

let area = areaOfRectangle(prompt("Enter length:") , prompt("Enter width:"));
//const length = prompt("enter length")
//const width = prompt("enter width")
console.log(`Area of rectangle is: ${area}`)