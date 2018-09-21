;(() => {
    'use strict';
    const table = document.querySelector('table');
    let counter = 0;
    table.addEventListener('click', function () {
        if (counter < 1) {
            this.classList.add('bordered');
            counter += 1;
        } else if (counter < 2) {
            this.classList.remove('bordered');
            this.classList.add('striped');
            counter += 1;
        } else if (counter < 3) {
            this.classList.remove('striped');
            this.classList.add('highlight');
            counter += 1;
        } else {
            this.classList.remove('highlight');
            counter = 0;
        }
    });
})();