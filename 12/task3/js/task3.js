;(() => {
    'use strict';
    let circleWrapper = document.querySelector('.circle-wrapper');
    for (let i = 0; i < 850; i++) {
        let div = document.createElement('div');
        div.classList.add('circle-item');
        div.addEventListener('mouseover', function () {
            this.style.borderRadius = '50%';
            this.style.transition = 'border-radius .4s ease';
            this.style.background = '#F1C39D';
        });
        circleWrapper.appendChild(div);
    }
})();