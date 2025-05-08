// Problem 5: Falling Distance

    // D = (1/2) * g * t²
    //* d = distance (meters)
    //* g = 9.8
    //* t = time (seconds)

function fallingDistance(time) {

    let g = 9.8
    let d = (1/2) * g * (time ** 2) // time ** 2 = t²

    return d;
}

for (let i = 1; i <= 10; i++) {
    let time = i;
    let d = fallingDistance(time);
    console.log(`The falling distance is ${d.toFixed(2)} meters.`);
}