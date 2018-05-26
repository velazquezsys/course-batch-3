"use strict";

// Variable section
let selectHTML = document.getElementById("selectSection");
let buttonHTML = document.getElementById("modalSection");
let closeHTML = document.getElementById("closeModal");
let closeButtonHTML  = document.getElementById("closeButtonModal");
let helpHTML = document.getElementById("helpSection");
let flagModal = false;

/* Custom text for the modal*/
document.getElementById('titleModal').innerHTML = 'Modal con título';
document.getElementById('bodyModal').innerHTML = 'Cuerpo de modal';
document.getElementById('footerModal').innerHTML = 'Footer del modal';

// Functions section
const showDivSelector = () =>{
    let optionHTML = document.getElementById("optionSection");
    if(optionHTML.style.display === 'none')
        optionHTML.style.display = 'block';
    else
        optionHTML.style.display = 'none';
};

const showDivModal = () => {
    let modalHTML = document.getElementById("modalWindow");

    modalHTML.style.display = 'block';

    flagModal = true;
};

const closeModal = () => {
    let modalHTML = document.getElementById("modalWindow");

    modalHTML.style.display = 'none';
    flagModal = false;
};


const showToolTip = () => {
    let toolTipHTML = document.getElementById('toolTip');

    if (toolTipHTML.style.display === 'none')
        toolTipHTML.style.display = 'block';
    else
        toolTipHTML.style.display = 'none';
}


window.addEventListener("click", function(evt) {
    const flyoutElement = document.getElementById('modalWindow');
    const buttonElement = document.getElementById('modalSection');
    if(flyoutElement.contains(evt.target)){
        console.log('dentro')
    }else{
        if(buttonElement.contains(evt.target)){
            showDivModal();
        }else{
            closeModal();
        }
    }

});


// Listener Event
selectHTML.addEventListener('click', showDivSelector);
buttonHTML.addEventListener('click', showDivModal);
closeHTML.addEventListener('click', closeModal);
closeButtonHTML.addEventListener('click', closeModal);
helpHTML.addEventListener('mouseover', showToolTip);
helpHTML.addEventListener('mouseout', showToolTip);
