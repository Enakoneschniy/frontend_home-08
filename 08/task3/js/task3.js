;(() => {
    'use strict';

    let func = () => {

        let prh = document.getElementsByTagName("p");

        for (let i = 0; i < prh.length; i++) {
            let num = i + 1;
            prh[i].textContent = num + ". " + prh[i].textContent;
        }
    };
    func();

})();