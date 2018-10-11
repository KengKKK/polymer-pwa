import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';

class Dialogtest extends PolymerElement {
    static get properties() {
        return {
            data: {
                type: String,
                value: ""
            },

        }
    }
    static get template() {
        return html`
        <vaadin-dialog id="dialog">
            <template>
                [[data]]
            </template>
        </vaadin-dialog>
        

        `
    }

    addEvent() {
        this.shadowRoot.querySelector("#dialog").opened = true
    }

    
    
}
customElements.define('dialog-test',Dialogtest);