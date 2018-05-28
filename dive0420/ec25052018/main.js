const dropDown = document.getElementById('dropDown');
const launch = document.getElementById('launch');
const opciones = document.getElementsByClassName('opcion');
const modal = document.getElementById('modal');
const bodyDiv = document.getElementById('bodyDiv');
const close = document.getElementById('close');
const principal = document.getElementById('principal');
const todo = document.getElementById('todo');

bodyDiv.innerText = `Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.
                    También es una composición de caracteres imprimibles
                     (con grafema) generados por un algoritmo de cifrado que, 
                     aunque no tienen sentido para cualquier persona, sí puede 
                     ser descifrado por su destinatario original. En otras palabras,
                      un texto es un entramado de signos con una intención comunicativa
                       que adquiere sentido en determinado contexto.`;
const tooltip = document.getElementById('tooltip');

dropDown.addEventListener('click',  (e) => {
    let opcionDiv = dropDown.nextElementSibling;
    if (opcionDiv.style.display === 'block') {
        opcionDiv.style.display = 'none';
    } else {
        opcionDiv.style.display = 'block';
        dropDown.style.display = 'none';
    }
});

const opcionesClick = () => {
    let i;
    for (i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener('click', function () {
            dropDown.innerText = this.innerText;
            this.parentElement.style.display = 'none';
            dropDown.style.display = 'block';
        });
    }
}

launch.addEventListener('click', (e) => {
    principal.style.display = 'none';
    todo.style.display = 'block'
    modal.style.display = 'block';
});

close.addEventListener('click', (e) => {
    modal.style.display = 'none';
    principal.style.display = 'block';
});

todo.addEventListener('click', (e) => {
    if(todo == e.target){
        principal.style.display = 'block';
        todo.style.display = 'none'
        modal.style.display = 'none';
    }
})

tooltip.addEventListener('mouseenter', (e) => {
    let tooltipText = document.getElementById('tooltipText');
    tooltipText.style.visibility = 'visible';
    tooltipText.style.width = '120px';
    tooltipText.style.backgroundColor = 'black';
    tooltipText.style.color = '#fff';
    tooltipText.style.padding = '5px 0px 0px 0px';
    tooltipText.style.borderRadius = '6px';

    tooltipText.style.position = 'absolute';
    tooltipText.style.zIndex = '1';
});

tooltip.addEventListener('mouseleave', (e) => {
    let tooltipText = document.getElementById('tooltipText');
    tooltipText.style.visibility = 'hidden';
});


opcionesClick();