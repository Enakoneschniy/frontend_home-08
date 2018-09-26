;(() => {
    'use strict';
    const wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener('mouseover', event => {
        event.target.textContent = '' + 'Перешёл с: ' + event.relatedTarget;
    })
})();