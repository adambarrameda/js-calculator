// global variables
const display = document.querySelector('.result')
const input = document.querySelector('.input')
let firstNum = 0;
let secondNum = 0;
let op = '';

const numClick = function(e) {
    if (display.innerText === '0') {
        display.innerText = e.target.innerText;
    } else {
        display.innerText += e.target.innerText;
    }
};

const eraseOne = function() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
};

const beginOp = function(e) {
    // store current display value (for use when pressing equal)
    firstNum = Number(display.innerText);
    // store current operand (same)
    if (e.target.classList.contains('divide')) {
        op = 'divide';
    } else if (e.target.classList.contains('multiply')) {
        op = 'multiply';
    } else if (e.target.classList.contains('add')) {
        op = 'add';
    } else {
        op = 'subtract';
    }
    // change button color
    e.target.classList.add('clicked');
};

const finishOp = function() {
    // perform stored operation between stored value and current display
    // update display to the result
    secondNum = Number(display.innerText);
    if (op === 'divide') {
        display.innerText = `${firstNum / secondNum}`;
        document.querySelector('.divide').classList.remove('clicked');
    } else if (op === 'multiply') {
        display.innerText = `${firstNum * secondNum}`;
        document.querySelector('.multiply').classList.remove('clicked');
    } else if (op === 'add') {
        display.innerText = `${firstNum + secondNum}`;
        document.querySelector('.add').classList.remove('clicked');
    } else if (op === 'subtract') {
        display.innerText = `${firstNum - secondNum}`;
        document.querySelector('.subtract').classList.remove('clicked');
    }
    op = '';
    firstNum = 0;
    secondNum = 0;
};

input.addEventListener("click", function (e) {
    if (e.target.classList.contains("num")) {
        numClick(e);
        return;
    } else if (e.target.classList.contains('equal')) {
        finishOp();
    } else if (e.target.classList.contains("operation")) {
        beginOp(e);
        display.innerText = '0';
    } else if (e.target.classList.contains("clear")) {
        display.innerText = '0';
    } else if (e.target.classList.contains('back')) {
        // remove last number from display (or make 0 if only one digit)
        eraseOne();
    }
});