import { html } from '@polymer/lit-element';

import { PageViewElement } from '../page-view-element';


import '../component/register/form-register.js'
import '../component/register/qrcode-register.js'

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
          <qrcode-register></qrcode-register>
    `;
  }
}




window.customElements.define('view-register', MyRegister);
