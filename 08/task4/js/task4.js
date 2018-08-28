;(() => {
    'use strict';
    document.querySelectorAll("button").forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            let p = document.querySelector("p.test" + (idx + 1));
            p.textContent = Number(p.textContent) + 1;
        })
    })
})();

