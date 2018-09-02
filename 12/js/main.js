// task 1

(function () {
    const divBlock = document.querySelector('.coord_block');
    const span = document.querySelector('.coord_span');
    divBlock.addEventListener('mousemove', function (e) {
        span.textContent = `координаты по x: ${e.clientX}, по y: ${e.clientY}`;
    })
})();

//task 2

(function () {
    const divBlock = document.querySelector('.folder_block');
    divBlock.addEventListener('dblclick', function () {
        this.classList.toggle('open');
    })
})();

//task 3

(function () {
    const divContainer = document.querySelector('.cycle_block');
    for(let i = 0; i <= 400; i++) {
        let div = document.createElement('div');
        div.classList.add('cycle_block_item');
        div.addEventListener('mouseover', function () {
            this.style.borderRadius = "50%";
        })
        divContainer.appendChild(div);
    }
})();

// task 4

(function () {
    const galeryWindow = document.querySelector('.gallery_window');
    const galeryImg = document.querySelectorAll('.gallery_preview img');
    for( let i = 0; i < galeryImg.length; i++) {
        galeryImg[i].addEventListener('click', (e) => {
            let imgSrc = e.target.getAttribute('src');
            galeryWindow.style.backgroundImage = `url(${imgSrc})`;
        })
    }


})();

// task 5

(function () {

    const div = document.querySelector('.jumping_block');
    let position = 0;
    div.addEventListener('click', function () {
        position += 100;
        this.style.top = `${position}px`;
    })

})();

//task 6

(function () {

    const trigerBlock = document.querySelector('.triger_block');
    let position = 0;
    trigerBlock.addEventListener('click', function () {
        if(position < 100) {
            position += 50;
            this.style.left = `calc(${position}% - 40px)`;
        }else {
            position = 0;
            this.style.left = `${position}%`;
        }
    })

})();

// task 7

(function () {

const table = document.querySelector('table');
table.addEventListener('click', function () {

if ( !(this.classList.contains('bordered')) && !(this.classList.contains('striped')) && !(this.classList.contains('highlight')) ) {
    this.classList.add('bordered');
}else if ( this.classList.contains('bordered') && !(this.classList.contains('striped')) && !(this.classList.contains('highlight')) ) {
    this.classList.remove('bordered');
    this.classList.add('striped');
}else {
    this.classList.remove('striped');
    this.classList.add('highlight');
}

})

})();

// task 8

(function () {

    const table = document.querySelector('div table');
    const radioButton = document.querySelectorAll('input[type=radio]')
    radioButton.forEach(function (item) {
        item.addEventListener('click', function () {

            table.classList.remove('bordered');
            table.classList.remove('striped');
            table.classList.remove('highlight');
            table.classList.add(this.dataset.class);

        })
    })


})();

//task 9

(function () {

    const table = document.querySelector('.table_with_checkbox');
    const tableCheckbox = document.querySelectorAll('.table_checkbox');

    tableCheckbox.forEach( item => {
        item.addEventListener('click', function (e) {
            if (e.target.checked) {
                table.classList.add(e.target.dataset.class);
            }else {
                table.classList.remove(e.target.dataset.class);
            }
        })
    })



})();

//task 10

(function () {

    const alertButton = document.querySelector('.button_for_text');
    const clearButton = document.querySelector('.clear_event');
    function showText() {
        alert(this.textContent);
    }
    alertButton.addEventListener('click', showText);

    clearButton.addEventListener('click', function () {
        alertButton.removeEventListener('click', showText);
    })

})();

//task 11

(function () {

    const div = document.querySelector('.alert_type');
    div.addEventListener('click', function (e) {
        if(e.target === document.querySelector('.alert_type a')) {
            e.preventDefault();
        }else if(e.target === div){
            return;
        }
        alert(e.target);

    })

})();

//task 12

(function () {

    const div = document.querySelector('.parent_div');
    div.addEventListener('mouseover', function (e) {
        e.target.textContent = 'пришла:' + e.target + ' ' + 'ушла:' + e.relatedTarget;
    })

})();

//task 13

(function () {

    const div = document.querySelector('.mouse_buton_info');
    div.addEventListener('mousedown', function (e) {
       div.textContent =  'нажата кнопка мыши:' + e.which;
    })

})();

//task 14

(function () {

    const img = document.querySelector('.task_img');
    let imgOpacity = 1;

    img.addEventListener('click', function () {
        if(imgOpacity < 0) {
            return;
        }
        imgOpacity -= 0.1.toFixed(1);
        img.style.transform = 'scale(1.2)';
        img.style.opacity = imgOpacity;


    })

})();

// task 15
(function () {

const img = document.querySelector('.task_img2');
let imgOpacity = 1;

img.addEventListener('mousemove', function () {
    if(imgOpacity < 0) {
        return;
    }
    imgOpacity -= 0.02;
    img.style.opacity = imgOpacity;

})

})();

//task 16

(function () {

    const img = document.querySelector('.task_img3');
    let imgSrc = img.getAttribute('src');
    img.addEventListener('mouseenter', function (e) {
        img.setAttribute('src', 'img/5.jpg');

    });
    img.addEventListener('mouseleave', function (e) {
        img.setAttribute('src', imgSrc);

    });

})();

//task 17
(function () {

    const img = document.querySelector('.task_img4');
    img.addEventListener('mouseenter', function (e) {
        img.style.transform = 'scale(1.4)';

    });
    img.addEventListener('mouseleave', function (e) {
        img.style.transform = 'scale(1)';

    });

})();

//task 18

(function () {

    const imgWrapp = document.querySelector('.fancy_wrapp');
    const img = document.querySelector('.fancy');
    img.addEventListener('click', function () {
        imgWrapp.classList.toggle('fancy_open');
    })

})();