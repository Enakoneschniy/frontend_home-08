;(() => {
    'use strict';
    let folder = document.querySelector('.close');
    folder.addEventListener('dblclick', function () {
        this.classList.toggle('open');
        this.classList.toggle('close');
    })
})();