;(() => {
    'use strict';
    const table = document.querySelector('table');
    const radio1 = document.querySelector('.radio-btn1');
    const radio2 = document.querySelector('.radio-btn2');
    const radio3 = document.querySelector('.radio-btn3');
    radio1.addEventListener('click', function () {
        table.classList.add('bordered');
    });
    radio2.addEventListener('click', function () {
        table.classList.remove('bordered');
        table.classList.add('striped');
    });
    radio3.addEventListener('click', function () {
        table.classList.remove('striped');
        table.classList.add('highlight');
    });
})();