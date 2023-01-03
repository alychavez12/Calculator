const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const button = document.querySelectorAll('.number');



button.forEach(function (buttons) {
    buttons.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        display.value += value;
    })

    equal.addEventListener('click', function (e) {
        if (display.value === 's') {
            let empty = eval(display.value);
            display.value = empty;

        } else {
            let answer = eval(display.value);
            display.value = answer;
        }

        clear.addEventListener('click', (e) => {
            display.value = "";
        })
    })

});