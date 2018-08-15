const firstButton = document.getElementById('first');
const secondButton = document.getElementById('second');
const thirdtButton = document.getElementById('third');

firstButton.addEventListener('click', checkFirstFigure);
secondButton.addEventListener('click', checkSecondFigure);
thirdtButton.addEventListener('click', checkThirdFigure);

function checkFirstFigure() {

    let x = parseFloat( prompt('введите чилсо по оси x', ''));
    let y = parseFloat( prompt('введите чилсо по оси y', ''));

    if ((x + 4 - y) > 0 && y > 0 && 4 - x - y > 0) {
        alert('Точка попадает в область');
    }
    else {
        alert('Точка не попадает в область!');
    }
};



function checkSecondFigure() {

    let x = parseFloat( prompt('введите чилсо по оси x', ''));
    let y = parseFloat( prompt('введите чилсо по оси y', ''));

    if (y > 0) {
        if ((-x - y) < 0 && y < 1 && y > x) {
            alert('Точка попадает в область');
        }
        else {
            alert('Точка не попадает в область!');
        }
    }
    else if (y < 0) {
        if ((-x - y) > 0 && y > -1 && y < x) {
            alert('Точка попадает в область');
        }
        else {
            alert('Точка не попадает в область!');
        }
    }
    else {
        alert('Точка не попадает в область!');
    }
};



function checkThirdFigure() {
    let x = parseFloat( prompt('введите чилсо по оси x', ''));
    let y = parseFloat( prompt('введите чилсо по оси y', ''));

    if ((Math.pow(x, 2) + Math.pow(y, 2) < 1) || (x < 0 && y < 0 && -2 - x - y < 0)) {
        alert('Точка попадает в область');
    }
    else {
        alert('Точка не попадает в область!');
    }
};

