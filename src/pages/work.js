import { html } from '@polymer/lit-element';

import { PageViewElement } from '../page-view-element';

import '../component/work/form-work.js'

class MyWork extends PageViewElement {

    static get properties() {
        return {

        }
    }
    constructor() {
        super()

    }


    _render() {
        return html`
        
            <form-work></form-work>
    `;
    }
}




window.customElements.define('view-work', MyWork);
