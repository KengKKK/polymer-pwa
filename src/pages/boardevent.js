import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element';

import '../component/boardevent/form-boardevent.js'
import '../component/boardevent/dialog-board.js'

class MyBoardEvent extends PageViewElement {
  _render() {
    return html`


        <style>
      .addEvent 
      {
        position: absolute;
        right: 24px;
        top: 5px;
      }
      </style>
    
    <paper-icon-button icon="add" class="" alt="เพิ่มกิจกรรม" on-click="${_ => this.addEvent()}"></paper-icon-button>
    
    <dialog-board id="dialogboard"></dialog-board>
    <form-boardevent ></form-boardevent>
    `;
  }
  addEvent(){
    this.shadowRoot.querySelector('#dialogboard').addEvent(); //call dialog
  }
}

window.customElements.define('view-boardevent', MyBoardEvent);
