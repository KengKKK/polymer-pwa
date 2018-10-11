import { html } from '@polymer/lit-element';

import { PageViewElement } from '../page-view-element';

import '../component/work/form-work.js'
import '../component/work/test-board.js'

class MyWork extends PageViewElement {

    static get properties() {
        return {
            qr: {
                type: String,
                value: ""
            }
        }
    }
    constructor() {
        super()

    }


    _render() {
        return html`
        
            <form-work></form-work>
            <dialog-test id="dialog"></dialog-test>
    `;
    }



}




window.customElements.define('view-work', MyWork);
