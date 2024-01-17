// Backend

// Operation functions

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

function operate(num1, operator, num2) {
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
const container = document.querySelector('#displayContainer');
let backup;
let num1;
let num2;
let operator;
let equation = '';


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        if (button.id === 'clear') {
            container.innerHTML = '';
            equation = ''
            return;
        }

        else if (button.id === 'delete') {

            if (equation.slice(-1) === ' ') {
                equation = equation.slice(0, -2)
            }
            else {
                equation = equation.slice(0, -1);
            }
            
            container.innerHTML = equation;
            
        }

        else if (button.id === '%' || button.id === 'x' || button.id === '-' || button.id === '+') {
            const eq_split = equation.split(' ');
            if (eq_split.length === 3) {
                container.innerHTML = '';
                container.innerHTML = operate(parseInt(eq_split[0]),eq_split[1],parseInt(eq_split[2]));
                
                backup = container.innerHTML;

                equation = '';
                equation = backup + ' ' + button.id + ' ';
        

            }

            else {
                equation += ' ' + button.id + ' ';
                container.innerHTML = equation;
            }
            
            
        }

        else if (button.id != '=') {
            equation += button.id;
            container.innerHTML = equation;
        }
        
        const eq_split = equation.split(' ');

        if (eq_split.length === 3 && button.id === '=') {

            if (operate(parseInt(eq_split[0]),eq_split[1],parseInt(eq_split[2])) == 'Infinity') {
                container.innerHTML = 'ZERO DIVISION ERROR';
            }

            else {
                container.innerHTML = operate(parseInt(eq_split[0]),eq_split[1],parseInt(eq_split[2]));
            }
        

            num1 = null;
            num2 = null;
            operator = null;
            equation = '';
            
        }
        
        
    })
})
