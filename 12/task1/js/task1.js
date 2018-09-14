;(() => {
    'use strict';
    const cont = document.querySelector('.container');
    const coord = document.querySelector('.coordinates');
    cont.addEventListener('mousemove', e => {
        coord.textContent = `Х: ${e.clientX}, Y: ${e.clientY}`;
    })
})();