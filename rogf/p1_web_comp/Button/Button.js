'use strict';
(() => {
    class ButtonToggle extends HTMLElement {

        constructor() {
            super();

            const shadowRoot = this.attachShadow({
                mode: 'open'
            });


            const link = document.querySelector('#template_Button');

            // Clone the <template> in the import.
            const template = link.import.querySelector('template');
            const clone = document.importNode(template.content, true);

            shadowRoot.appendChild(clone);


            this.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('toggle', {
                    bubbles: true,
                    composed: true
                }));
            });

        }
    }
    window.customElements.define('button-toggle', ButtonToggle);
})();