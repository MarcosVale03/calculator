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
        add(num1, num2);
    }

    else if (operator === '-') {
        sub(num1, num2);
    }

    else if (operator === 'x') {
        mult(num1, num2);
    }

    else if (operator === '%') {
        div(num1, num2);
    }
}


// Initializing variables 
let num1;
let num2;
let operator;




