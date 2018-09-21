;(() => {
    'use strict';
    const img = document.querySelector('.img-block');
    let positionCounter = 0;
    img.addEventListener('click', function () {
        if (positionCounter < 1) {
            this.style.marginTop = '-188px';
            positionCounter += 1;
            console.log('1')
        } else if (positionCounter < 2) {
            this.style.marginTop = '-375px';
            positionCounter += 1;
            console.log('2')
        } else {
            this.style.marginTop = '0';
            positionCounter = 0;
            console.log('0')
        }
    });
})();