'use strict';
class LigthList extends HTMLElement {
    
    constructor(){
        
        super();
                
        const shadowRoot = this.attachShadow({mode: 'open'});

        
        const link = document.querySelector('#template_List');
        
        // Clone the <template> in the import.
        const template = link.import.querySelector('template');
        const clone = document.importNode(template.content, true);
        
        
        const list = clone.querySelector('ul');
        
        
        let items = this.getAttribute('items');
        items = JSON.parse(items);
        
        for(const item of items){
            let li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        }
        
        shadowRoot.appendChild(clone.querySelector('style'));  
        shadowRoot.appendChild(document.createElement('button-toggle'));
        shadowRoot.appendChild(list);
        
        
        this.addEventListener('toggle', () => {

            list.classList.toggle('hideList');
        });
    }
}
window.customElements.define('light-list', LigthList);