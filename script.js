// Part 2: JavaScript Functions
function calculateSum() {
    const num1 = 5;
    const num2 = 7;
    const sum = num1 + num2;
    document.getElementById('function-output').textContent = `The sum is: ${sum}`;
}

function toggleAnimation() {
    const box = document.querySelector('.box');
    box.classList.toggle('animate');
}

// Part 3: Combining CSS and JavaScript
function animateBox() {
    const box = document.querySelector('.box');
    box.classList.toggle('animate');
}

function flipCard() {
    const cardInner = document.querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
}
