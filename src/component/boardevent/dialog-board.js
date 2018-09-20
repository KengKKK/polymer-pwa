import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';

class DialogBoard extends PolymerElement {
    static get properties() {
        return {
            data: {
                type: Array,
                value: {}
            },
            edit: {
                type: Boolean,
                value: false
            }
        }
    }
    static get template() {
        return html`
        <vaadin-dialog id="dialog">
            <template>
                test
            </template>
        </vaadin-dialog>
        
        <vaadin-dialog id="ConfirmDialog">
            <template>
                <center>
                    Confirm Delete ?
                    <hr>
                    <vaadin-button on-click="openconf">OK</vaadin-button>
                    <vaadin-button on-click="closeconf">Cancel</vaadin-button>
                </center>
            </template>
        </vaadin-dialog>
        `
    }

    Submit() {
        if (this.edit == false) {
            if (Object.keys(this.data).length != 2) {
                this.$.dialog.opened = true
            }
            else {
                this.dispatchEvent(new CustomEvent('submit', { detail: this.data }))
                this.$.dialog.opened = false
            }
        }
        else if (this.edit == true) {
            this.dispatchEvent(new CustomEvent('update', { detail: this.data }))
            this.$.dialog.opened = false
        }
    }
    //career
    dropboxValue(e){
        this.data.car = e.target.value
    }
    //faculty
    dropboxValue1(e){
       this.data.fac = e.target.value
    }

    editData(data) {
        this.set('data', data)
        this.edit = true
        this.shadowRoot.querySelector("#dialog").opened = true
    }
    //for add
    addEvent() {
        this.shadowRoot.querySelector("#dialog").opened = true
        this.edit = false
        this.data = {} 
    }
    openconf() {
        this.dispatchEvent(new CustomEvent('conf'))
        this.$.ConfirmDialog.opened = false
    }
    closeconf() {
        this.$.ConfirmDialog.opened = false
    }
    confDelFromSel() {
        this.shadowRoot.querySelector("#ConfirmDialog").opened = true
    }
    _valueChanged(e) {
        this.set('data.' + e.target.getAttribute("name"), e.target.value)

    }
}
customElements.define('dialog-board',DialogBoard);