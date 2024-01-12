// Backend

// Operation functions
// check for float numbers later and 0 division error on div function
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

// Calls an operation function depending on operator value
function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    }

    else if (operator === '-') {
        return sub(num1, num2);
    }

    else if (operator === 'x') {
        return mult(num1, num2);
    }

    else if (operator === '%') {
        return div(num1, num2);
    }
}


// Initializing variables 
let num1;
let num2;
let operator;
let counter = 0;

// Button operations are working, couple of things to remember
// Check that the second button click is an operator and that
// the first and third button clicks are not operators and are numbers
// Account for decimal numbers, and then start displaying

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        counter += 1;
        
        if (counter === 1) {

            num1 = button.id;
        }

        else if (counter === 2) {
            operator = button.id;
        }

        else if (counter === 3) {
            num2 = button.id;
        }
        
        else if (button.id === '=') {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            alert(operate(num1,num2,operator))

            counter = 0;
            num1 = null;
            num2 = null;
            operator = null;
        }
        
    })
})
