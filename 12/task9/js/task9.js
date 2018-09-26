;(() => {
    'use strict';
    const table = document.querySelector('table');
    const radio1 = document.querySelector('.radio-btn1');
    const radio2 = document.querySelector('.radio-btn2');
    const radio3 = document.querySelector('.radio-btn3');
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    radio1.addEventListener('click', event => {
        if (counter1 < 1) {
            table.classList.add('bordered');
            counter1 += 1;
        } else if (counter1 < 2) {
            table.classList.remove('bordered');
            counter1 = 0;
        } else {
            return event();
        }
    });

    radio2.addEventListener('click', event => {
        if (counter2 < 1) {
            table.classList.add('striped');
            counter2 += 1;
        } else if (counter2 < 2) {
            table.classList.remove('striped');
            counter2 = 0;
        } else {
            return event();
        }
    });

    radio3.addEventListener('click', event => {
        if (counter3 < 1) {
            table.classList.add('highlight');
            counter3 += 1;
        } else if (counter3 < 2) {
            table.classList.remove('highlight');
            counter3 = 0;
        } else {
            return event();
        }
    });
})();