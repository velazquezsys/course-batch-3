'use strict';

/* DropDown */
const dropdown = (elementDiv, mapElementos) => {
    const widget = elementDiv;

    const eventElementDropdown = (evento) => {
        label.innerText = evento.target.innerText;
        eventDropdown();
    };
    const eventDropdown = () =>{
        console.log('evento');
        if(widget.classList.contains('dropdown')){
            widget.classList.remove('dropdown');
            widget.classList.add('dropdown-active');
        }else{
            widget.classList.remove('dropdown-active');
            widget.classList.add('dropdown');
        }
    };
    widget.innerHTML = '';
    const label = document.createElement("span");
    label.innerText = 'Seleccionar';
    const areaElementos = document.createElement("ul");
    for(const elem of mapElementos){
        const elemento = document.createElement('li');
        elemento.innerText = elem.name;
        elemento.addEventListener('click', eventElementDropdown);
        areaElementos.appendChild(elemento);
    }
    widget.classList.add('dropdown');
    widget.appendChild(label);
    widget.appendChild(areaElementos);
    label.addEventListener('click', eventDropdown);
};

/* Tooltip */
const tooltip = (elementDiv) => {
    const widget = elementDiv;
    const label = document.createElement("span");
    label.innerText = widget.getAttribute('data-help');
    widget.addEventListener('mouseover', () => {
        widget.classList.add('tooltip');
    });
    widget.addEventListener('mouseleave', () => {
        widget.classList.remove('tooltip');
    });


    label.classList.add('tooltip-help');
    widget.appendChild(label);
};

/* Modal */
const modal = (elementDiv, opcionesModal) => {

    const widget = elementDiv;

    const modalHeader = document.createElement('div');
    const modalBody = document.createElement('div');
    const modalFooter = document.createElement('div');

    const estructuraModal = {
        modalHeader:modalHeader, modalBody:modalBody,
        modalFooter:modalFooter
    };

    for(const elem of opcionesModal){
        estructuraModal[elem.llave].innerHTML = elem.valor;
    }

    widget.appendChild(modalHeader);
    widget.appendChild(modalBody);
    widget.appendChild(modalFooter);

    widget.classList.add('modal');

};

/* prueba dropdown */
const itemDropdown = document.getElementById('dropdown');
const elementosDropdown = [
    {value:1, name: 'elemento1'},
    {value:2, name: 'elemento2'},
    {value:3, name: 'elemento3'},
    {value:4, name: 'elemento4'}
];

dropdown(itemDropdown, elementosDropdown);

/* prueba tooltip */
const itemTooltip = document.getElementById('tooltip');
tooltip(itemTooltip);
