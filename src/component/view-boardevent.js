import {  html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element.js';

import '../component/boardevent/form-boardevent.js'

class MyBoardEvent extends PageViewElement {
  _render() {
    return html`
    <form-boardevent item="test"></form-boardevent>
    `;
  }
}

window.customElements.define('view-boardevent', MyBoardEvent);
