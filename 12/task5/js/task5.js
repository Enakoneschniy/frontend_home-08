;(() => {
    'use strict';
    const block = document.querySelector('.block');
    let topCounter = 0;
    block.addEventListener('click', function () {
        topCounter += 100;
        this.style.marginTop = `${topCounter}px`;
    })
})();