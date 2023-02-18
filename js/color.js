// random color

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
for(i = 0; i < 5; i++) {
    console.log(randomRGBColor());
}
