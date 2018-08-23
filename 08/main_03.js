    'use strict';

    function func() {
        let paragraphs = document.getElementsByTagName("p");

        for(let i = 0; i < paragraphs.length; i++){
            let number = i + 1;
            paragraphs[i].innerHTML = " " + number +
                ". " + paragraphs[i].innerHTML;
        }
    }
func();

