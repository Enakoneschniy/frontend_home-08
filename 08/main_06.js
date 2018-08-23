    'use strict';

    const tName = prompt('input tag name', '');
    function func() {
        let tag = document.createElement("tName");
        if (tName === "p"){
            tag.innerHTML = "<style>p { text-decoration: underline; }</style>";
            document.body.appendChild(tag);
        } else if(tName === "h1"){
            tag.innerHTML = "<style>h1 { text-decoration: underline; }</style>";
            document.body.appendChild(tag);
        } else if(tName === "h2"){
            tag.innerHTML = "<style>h2 { text-decoration: underline; }</style>";
            document.body.appendChild(tag);
        } else {
            alert("No such tag");
        }
    }

    func();

