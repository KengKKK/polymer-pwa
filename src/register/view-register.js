import { LitElement, html } from '@polymer/lit-element';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import './component/form-register.js'

class MyRegister extends LitElement {
  
  static get properties() {
    return {
      items: Object
    }
  }
  constructor() {
    super()

  }
 

  _render() {
    return html`
          <form-register></form-register>
    `;
  }
}


 

window.customElements.define('view-register', MyRegister);
