import { LitElement, html } from '@polymer/lit-element';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
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
        <style>

        </style>


        <app-header-layout>
        <app-header class="blueHeader" waterfall fixed slot="header" >
          <app-toolbar top-item>
            <paper-icon-button icon="polymer"></paper-icon-button>
            <div  main-title>Smart Register</div>
            <div class="account-menu">
            <paper-icon-button icon="event"></paper-icon-button>
            <paper-icon-button icon="subdirectory-arrow-right"></paper-icon-button>
            </div>                   
          </app-toolbar>
        </app-header>

        <app-drawer-layout>
          <!-- App drawer -->
        <app-drawer slot="drawer" position="left" persistent opened class="app-drawer">
              <app-toolbar class="nav-tool"> 
                
              </app-toolbar>

               <h3>Menu</h3>
                    <paper-item>

                    <paper-icon-item class="iconItem" role="option" tabindex="0" aria-disabled="false" on-click="${(e) => this._nav1(e)}">
                        <iron-icon class="grayIcon" icon="inbox" slot="item-icon"></iron-icon>
                        <span class="nav-tool">Board Event</span>
                    </paper-icon-item>

                    <paper-icon-item class="iconItem" role="option" tabindex="0" aria-disabled="false">
                        <iron-icon class="grayIcon" icon="inbox" slot="item-icon"></iron-icon>
                        <span class="font-thai">ตรวจสอบรายชื่อ</span>
                    </paper-icon-item>

                    <paper-icon-item class="iconItem" role="option" tabindex="0" aria-disabled="false">
                        <iron-icon class="grayIcon" icon="inbox" slot="item-icon"></iron-icon>
                        <span>Option Name</span>
                    </paper-icon-item>
                  
                    </paper-item>
        </app-drawer>

                        <!-- Main content -->
                    <main role="main" class="main-content">
                        <div class="form-register">
                            <form-register></form-register>
                        </div>
                    </main>
  </app-drawer-layout>
  </app-header-layout>

        `
    }
  
    _nav1(e){
        console.log("eiei",e)
    }

}

customElements.define('my-app', MyApp);
