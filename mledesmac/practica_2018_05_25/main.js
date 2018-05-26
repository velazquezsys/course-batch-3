"use strict";

const showDiv = () =>{
    let optionHTML = document.getElementById("optionSection");
    if(optionHTML.style.display === 'none')
        optionHTML.style.display = 'block';
    else
        optionHTML.style.display = 'none';
}

let selectHTML = document.getElementById("selectSection");
selectHTML.addEventListener('click', showDiv)