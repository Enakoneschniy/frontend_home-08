;(() => {
    'use strict';
    let underLine = (tag) => {
        let tagName = document.querySelectorAll(tag);
        for (let i = 0; i < tagName.length; i++) {
            tagName[i].style.textDecoration = "underline";
        }
    };
    let inputTag = underLine(prompt('Введите тег', ''));
        alert(inputTag);
})();