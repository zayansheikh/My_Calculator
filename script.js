const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            expression = '';
            display.value = '';
        }else if(button.id === 'delete'){
            expression = expression.substr(0, expression.length -1);
            // expression = display.value +1;
            display.value = expression                    
        } else if (button.textContent === '=') {
            try {
                display.value = eval(expression)
                expression = display.value
            }
            catch {
                display.value = 'Error';
                expression = '';
            }
        } else {
            expression += button.textContent;
            display.value = expression;
        }
    });
});