;(() => {
    'use strict';
    const wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener('click', event => {
        if (event.target === wrapper) {
            return;
        }
        alert(event.target);
    })
})();