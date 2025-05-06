// Problem 4: Maximum of Two Values

function maximum(num1,num2) {

    let a = Math.max(num1,num2);
    
    return a;
}

let a = maximum(prompt("Enter first number:"), prompt("Enter second number:"));
console.log(`The higher number is ${a}`);