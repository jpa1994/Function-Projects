// Problem 3: Math Quiz

function mathQuiz(userAnswer) {

    if (userAnswer === answer) {
        console.log("Congratulations!")
    } else {
        console.log(`Incorrect. The answer is: ${answer}`);
    }

    return userAnswer;
}

    //* Adding random numbers
let x = Math.floor(Math.random() * 1000);
let y = Math.floor(Math.random() * 1000);
let answer = x + y;

    //* Prompt user to answer random math question
let userAnswer = prompt(`What is ${x} + ${y} ?`);
userAnswer = Number(userAnswer);
console.log("You answered: ", mathQuiz(userAnswer));