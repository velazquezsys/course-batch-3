

'use strict';

const arrayOfDinosaurus = ['allosaurus', 'brontosaurus', 'carcharodontosaurus','diplodocus'];
const value = 'value';
let divOptionMenu;
let divOptionValues;
let modal;
let btn;
let span;
let btnModalClose;
let elems;
getHTMLElements();

function getHTMLElements(){
    divOptionMenu = document.getElementById('optionMenu');
    divOptionValues = document.getElementById('optionValue');
    modal = document.getElementById('myModal');
    btn = document.getElementById("myBtn");
    span = document.getElementsByClassName("close")[0];
    elems = document.getElementsByClassName('quick-tip'); 

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

function doTip(e){    
    const elem = e.target;    
    if(elem.getAttribute('data-tip-on')  === 'false') {
      elem.setAttribute('data-tip-on', 'true');
      const rect = elem.getBoundingClientRect();          
      const tipId = Math.random().toString(36).substring(7);
      elem.setAttribute('data-tip-id', tipId);
      const tip = document.createElement("div");
      tip.setAttribute('id', tipId);
      tip.innerHTML = elem.getAttribute('data-tip');
      tip.style.top = rect.bottom+ 10 + 'px';
      tip.style.left = (rect.left-200) + 'px';
      tip.setAttribute('class','tip-box');
      document.body.appendChild(tip);

    } else {
        
        elem.setAttribute('data-tip-on', 'false');
        const tip = document.getElementById(elem.getAttribute('data-tip-id'));
        tip.parentNode.removeChild(tip);
      
      
    }    
}


function enableTips(){
  
  for(const iterable of elems) {
    iterable.addEventListener("mouseover", doTip, false);
    iterable.addEventListener("mouseout", doTip);

  }
}

   window.onload = function(){
        enableTips();
    }
