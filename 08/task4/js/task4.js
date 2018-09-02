;(() => {
    'use strict';
document.querySelectorAll("button").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            let p = document.querySelector("p.test" + (i + 1));
            p.textContent = Number(p.textContent) + 1;
        })
    })
})();