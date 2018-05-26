let element = document.getElementById("options");
let title = document.getElementById("selected");

element.setAttribute('style', 'visibility: hidden; ');

function dropDown() {
    element.setAttribute('style', 'visibility: visible; border-style: solid;');

}

function select  ( value) {
    title.innerHTML = value;
    element.setAttribute('style', 'visibility: hidden; ');

}