'use strict';

const element   = document.getElementById('modalDiv');
const container = document.getElementById('container');
const idHeader  = document.getElementById('header');
const idBody    = document.getElementById('body');
const idFooter  = document.getElementById('footer');

const idNombre  = document.getElementById('nombre');
const idCorreo  = document.getElementById('correo');
const idGenero  = document.getElementById('genero');
const idCalle   = document.getElementById('calle');
const idCiudad  = document.getElementById('ciudad');
const idEstado  = document.getElementById('estado');

const header = 'Random User';
const footer = 'https://randomuser.me/api/';

idHeader.innerHTML = header;
idFooter.innerHTML = footer;

element.setAttribute('style', 'visibility: hidden; ');

const onClickOpen  = () =>  {
    element.setAttribute('style', 'visibility: visible;  background-color: #ffffff;');
    element.setAttribute('class', 'modal');
    container.setAttribute('class', 'container');

    fetch('https://randomuser.me/api/')
        .then((res) => { return res.json() })
        .then((data) => {
            idNombre.innerHTML = getName(data.results[0]);
            idCorreo.innerHTML = data.results[0].email;
            idGenero.innerHTML = data.results[0].gender;
            idCalle.innerHTML = data.results[0].location.street;
            idCiudad.innerHTML = data.results[0].location.city;
            idEstado.innerHTML = data.results[0].location.state;
        })
        .catch((error) => {
            idHeader.innerHTML = "Error al consultar Usuario Random.";
            idBody.innerHTML = error.message;
        });
}

const getName   = (data) =>  {
    return data.name.title + ' ' + data.name.first + ' ' + data.name.last ;
}

const onClickClose   = () =>  {
    element.setAttribute('style', 'visibility: hidden;');
    container.removeAttribute("class");
}

window.addEventListener('click', (e) => {
    if (!document.getElementById('modalDiv').contains(e.target)
        && !document.getElementById('btnOpenModal').contains(e.target)){
        onClickClose();
    }
});
