;(() => {
    'use strict';
    const buttonText = document.querySelector('.text-btn');
    const buttonOff = document.querySelector('.off-btn');
    const buttonOn = document.querySelector('.on-btn');

    buttonText.addEventListener('click', function () {
        alert(this.textContent);
    });
    buttonOff.addEventListener('click', function () {
        buttonText.classList.add('pointerEvents')
    });
    buttonOn.addEventListener('click', function () {
        buttonText.classList.remove('pointerEvents')
    })
})();