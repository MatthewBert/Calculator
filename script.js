console.log("Welcome to Calculator");

//DOM elements for all calculator buttons and operations
const screen = document.querySelector('#screen');
const clearBtn = document.querySelector('.clear');
const undoBtn = document.querySelector('.undo');
const divideBtn = document.querySelector('.divide');
const timesBtn = document.querySelector('.times');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const equalsBtn = document.querySelector('.equals');
const numberBtn = document.querySelectorAll('.num');
const buttons = document.querySelectorAll('.calc-button');

console.log(clearBtn.textContent)

//Global data storage
let currentNumber = '';
let operatorValue = '';
let display = '';
let sum = "0";



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "x") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    } else {
        return prompt("Error");
    }
}

function populateDisplay() {
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;
            console.log(buttonText);
            
            if (buttonText == 'C') {
                display = '';
                sum = '';
                screen.textContent = '0';
            } else {
                if (screen.textContent === '0') {
                    screen.textContent = '';
                }
                display += buttonText;
            }
            screen.textContent = display;
        })
    })
}

populateDisplay();

