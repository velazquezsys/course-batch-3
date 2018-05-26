let element = document.getElementById('modalDiv');
let container = document.getElementById('container');
let idHeader = document.getElementById('header');
let idBody = document.getElementById('body');
let idFooter = document.getElementById('footer');

let header = 'Javascript';
let body = 'JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3​ basado en prototipos, imperativo, débilmente tipado y dinámico.';
let footer = 'fuente: https://es.wikipedia.org/wiki/JavaScript';

idHeader.innerHTML = header;
idBody.innerHTML = body;
idFooter.innerHTML = footer;

element.setAttribute('style', 'visibility: hidden; ');

const onClickOpen  = () =>  {
    element.setAttribute('style', 'visibility: visible;  background-color: #ffffff;');
    element.setAttribute('class', 'modal');
    container.setAttribute('class', 'container');
}

const onClickClose   = () =>  {
    element.setAttribute('style', 'visibility: hidden;');
    container.removeAttribute("class");
}

window.addEventListener('click', function(e){
    if (!document.getElementById('modalDiv').contains(e.target)
        && !document.getElementById('btnOpenModal').contains(e.target)){
        onClickClose();
    }
});