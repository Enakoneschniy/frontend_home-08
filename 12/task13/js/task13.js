;(() => {
    'use strict';
    const clickBlock = document.querySelector('.click-block');
    clickBlock.addEventListener('mousedown', e => {
        document.querySelector('.get-block').textContent = 'Mouse button: ' + e.which;
    })
})();