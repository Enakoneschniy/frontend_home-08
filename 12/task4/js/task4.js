;(() => {
    'use strict';
    const view = document.querySelector('.view');
    const imgSlider = document.querySelectorAll('.img-slider');
    for (let i = 0; i < imgSlider.length; i++) {
        imgSlider[i].addEventListener('click', e => {
            let imgSrc = e.target.getAttribute('src');
            view.style.backgroundImage = `url(${imgSrc})`;
        })
    }
})();