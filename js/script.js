'use strict';
// переменные
let buttons = document.querySelector('.buttons'),
    input = document.querySelector('.value');

buttons.addEventListener('click', deduce);

function deduce(e) {
    let item = e.target;

    if (item.classList.contains('numbers') === true) {
        input.value += item.value;
        console.log(item.value);
    } else if (item.classList.contains('clear') === true) {
        input.value ='';
    } else if (item.classList.contains('delete') === true) {
        input.value = del(input.value);
    } else if (item.classList.contains('result') === true) {
            try {          
                input.value = eval(input.value);
            } catch (e) {
                input.value = 'error';
            }
        
    }
}


function del(str) {
    let mas = str.split('');
    mas.pop();
    let masUnite = mas.join('');
    str = masUnite;
    return str;       
}