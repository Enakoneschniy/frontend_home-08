;(() => {
    'use strict';

        const table = document.querySelector('table');
        const radio = document.querySelector('.radio-btn');
            radio.addEventListener('click', function () {
               table.classList.add('bordered');
            })
})();