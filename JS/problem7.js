// Problem 7: Odd/Even Function designs
// Checking if a number is even or odd

function even(n1) {

    return n1 % 2 == 0;

}

function odd(n1) {

     return n1 % 2 !== 0;

}

let n1 = Number(prompt("Enter a number"));

if (even(n1)) {
    console.log(`${n1} is even.`);
  } else if (odd(n1)) {
    console.log(`${n1} is odd.`);
  } else {
    console.log("Unexpected result.");
  }

