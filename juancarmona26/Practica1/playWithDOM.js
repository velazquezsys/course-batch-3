

const arrayOfDinosaurus = ['allosaurus', 'brontosaurus', 'carcharodontosaurus','diplodocus'];
const value = 'value';



function createOptionsInOptionMenuDiv() {

    for(const iterable of arrayOfDinosaurus) {
        const divOptionMenu = document.getElementById('optionMenu');
        const divOptionValues = document.getElementById('optionValue');
        
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
    console.log("si entrea");
    const divOptionMenu = document.getElementById('optionMenu');
    const divOptionValues = document.getElementById('optionValue');
    const textElement = document.getElementById('demo');
    textElement.innerHTML = value;   
    divOptionMenu.style.display = 'block';

    divOptionValues.innerHTML = '';  
    
}