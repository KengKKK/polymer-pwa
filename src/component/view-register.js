import { html } from '@polymer/lit-element';

import { PageViewElement } from '../page-view-element.js';


import './register/form-register.js'

class MyRegister extends PageViewElement {

  static get properties() {
    return {

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
