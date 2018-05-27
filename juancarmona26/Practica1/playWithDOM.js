

'use strict';

const arrayOfDinosaurus = ['allosaurus', 'brontosaurus', 'carcharodontosaurus','diplodocus'];
const value = 'value';
let divOptionMenu;
let divOptionValues;
let modal;
let btn;
let span;
let btnModalClose;
getHTMLElements();

function getHTMLElements(){
    divOptionMenu = document.getElementById('optionMenu');
    divOptionValues = document.getElementById('optionValue');
    modal = document.getElementById('myModal');
    btn = document.getElementById("myBtn");
    span = document.getElementsByClassName("close")[0];   

}



function createOptionsInOptionMenuDiv() {

    for(const iterable of arrayOfDinosaurus) {
      
        
        const option = document.createElement('OPTION');
        option.setAttribute(value, iterable);
        const textNode = document.createTextNode(iterable);
        option.appendChild(textNode);
        option.addEventListener("click", function() {
            setValue(iterable);
          });
        divOptionValues.appendChild(option);      
        divOptionMenu.style.display = "none";                
    }

};

function setValue(value) {
    console.log("si entra")
    const textElement = document.getElementById('demo');
    textElement.innerHTML = value;   
    divOptionMenu.style.display = 'block';

    divOptionValues.innerHTML = '';  
    
};

function closeModal() {
    modal.style.display = "none";
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}