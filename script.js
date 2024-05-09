console.log("Welcome to Calculator");

let operatorValue = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
        //DOM elements for all calculator buttons and operations
    let screen = document.querySelector('#screen');
    let clearBtn = document.querySelector('.clear');
    let undoBtn = document.querySelector('.undo');
    let equalBtn = document.querySelector('.equal');
    let operators = document.querySelectorAll('.operator');
    let numbers = document.querySelectorAll('.num');

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        screen.textContent = currentValue;
    }));

    operators.forEach((operator) => operator.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        screen.textContent = previousValue + ' ' + operatorValue;
    }));

    clearBtn.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operatorValue = '';
        screen.textContent = 0;
    });

    equalBtn.addEventListener("click", function(){
        previousValue = Number(previousValue);
        currentValue = Number(currentValue);

        if(operatorValue == "/" && currentValue == 0){
            screen.textContent = "cant divide by 0";
        } else {
            screen.textContent = operate(previousValue, operatorValue, currentValue);
            currentValue = screen.textContent;
        }

    });

    undoBtn.addEventListener("click", function(){
        if(currentValue.length > 0){
            currentValue = currentValue.slice(0,-1);
            screen.textContent = currentValue;
            if(currentValue.length == 0){
                screen.textContent = 0;
            }
        }
    });

});

function handleNumber(num){
    if(currentValue.length <= 7){
        currentValue = currentValue + num;
    }
}

function handleOperator(op){
    operatorValue = op;
    previousValue = currentValue;
    currentValue = '';
}

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


