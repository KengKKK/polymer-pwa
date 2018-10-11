import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element';

import '../component/boardpeople/form-boardpeople.js'

class MyBoardPeople extends PageViewElement {
  _render() {
    return html`
  
    <form-boardpeople ></form-boardpeople>
    `;
  }

}

window.customElements.define('view-boardpeople', MyBoardPeople);
