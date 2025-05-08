// Problem 6: Test Average and Grade

function calcAverage(score1, score2, score3, score4, score5) {

    let sum = score1 + score2 + score3 + score4 + score5;
    let scoreAvg = sum/5;

    return Number(scoreAvg.toFixed(0));
}

function determineGrade(score1, score2, score3, score4, score5, scoreAvg) {

    let determineGrades = [score1, score2, score3, score4, score5, scoreAvg];

    for (let i = 0; i < determineGrades.length; i++) {

        let score = determineGrades[i]

            if (score >= 90) {
                console.log(`Score ${[i + 1]}: ${score} = A`); // ex. Score 1: score = A
            } else if (score >= 80) {
                console.log(`Score ${[i + 1]}: ${score} = B`); 
            } else if (score >= 70) {
                console.log(`Score ${[i + 1]}: ${score} = C`);
            } else if (score >= 60) {
                console.log(`Score ${[i + 1]}: ${score} = D`);
            } else  {
                console.log(`Score ${[i + 1]}: ${score} = F`);  
            }
    }

}

let score1 = prompt("Enter score");
score1 = Number(score1);

let score2 = prompt("Enter score");
score2 = Number(score2);

let score3 = prompt("Enter score");
score3 = Number(score3);

let score4 = prompt("Enter score");
score4 = Number(score4);

let score5 = prompt("Enter score");
score5 = Number(score5);

let scoreAvg = calcAverage(score1, score2, score3, score4, score5);
let grades = determineGrade(score1, score2, score3, score4, score5, scoreAvg);