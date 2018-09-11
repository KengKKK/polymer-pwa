import { LitElement, html } from '@polymer/lit-element';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@polymer/iron-selector/iron-selector.js'
import '@vaadin/vaadin-button/vaadin-button.js';

import './register/view-register.js'
import { SharedStyles } from './shared-styles.js';
class MyApp extends LitElement {



    static get properties() {
        return {

        };
    }

    constructor() {
        super();
    }

   

    _render() {
        return html`
        ${SharedStyles}



        <app-drawer-layout>
        
        <app-drawer slot="drawer">
            drawer content
        </app-drawer>

        <app-header-layout>
        <app-header class="blueHeader">
        <app-toolbar top-item>
          <paper-icon-button icon="menu"></paper-icon-button>
          <div id="account-bar"main-title>Smart Register</div>
          <div class="account-menu">
          <paper-icon-button icon="event"></paper-icon-button>
          <paper-icon-button icon="subdirectory-arrow-right"></paper-icon-button>
          </div>                   
        </app-toolbar>
      </app-header>

        <div>
        <form-register></form-register>
        </div>

      </app-header-layout>
      </app-drawer-layout>



    

        `
    }
  

}

customElements.define('my-app', MyApp);
