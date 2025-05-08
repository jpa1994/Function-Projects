// Problem 7: Odd/Even Function designs
// Checking if a number is even or odd

function even(n1) {

    return n1 % 2 == 0;

}

function odd(n1) {

     return n1 % 2 !== 0;

}

function oddOrEven () {
    let n1 = Number(prompt("Enter a whole number:"));
    console.log(`${n1} is even: ${even(n1)}`);
    console.group(`${n1} is odd: ${odd(n1)}`)
}
oddOrEven();