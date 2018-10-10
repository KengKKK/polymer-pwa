import { LitElement, html } from '@polymer/lit-element';

import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { SharedStyles } from './shared-styles.js';

import { store } from '../src/store.js';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-selector/iron-selector.js'

// These are the actions needed by this element.
import {
    navigate,
    updateOffline,
    updateLayout
  } from './action/app.js';


class MyApp extends connect(store)(LitElement) {



    static get properties() {
        return {
            _drawerOpened: Boolean,
            _page: String,
            appTitle: String
        };
    }

    constructor() {
        super();
        setPassiveTouchGestures(true);
    }
    
  _firstRendered() {
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
  }




    _render({_page}) {
        return html`
        ${SharedStyles}
<style>
    .page {
        display: none;
    }
    .page[active] {
        display: block;
    }
</style>

<app-header-layout>
    <app-header class="blueHeader" waterfall fixed slot="header">
        <app-toolbar top-item>
            <paper-icon-button icon="menu" on-click="${_ => this._toggle()}"></paper-icon-button>
            <div main-title>Smart Register</div>
            KK<div class="account-menu"> 
                <paper-icon-button icon="account-circle"></paper-icon-button>
            </div>
        </app-toolbar>
    </app-header>

    <app-drawer-layout>
        <!-- App drawer -->
        <app-drawer slot="drawer" position="left" persistent class="app-drawer">
            <app-toolbar class="nav-tool"></app-toolbar>
            <h3>Menu</h3>
    
            <a selected?="${_page === 'Work'}" href="/Work">
                <paper-icon-item class="iconItem" role="option" >
                    <iron-icon  icon="inbox" slot="item-icon"></iron-icon>
                    <span class="nav-tool">ลงทะเบียน (หน้างาน)</span>
                </paper-icon-item>
            </a>

            <a selected?="${_page === 'Boardevent'}" href="/Boardevent">
                <paper-icon-item class="iconItem" role="option" >
                    <iron-icon  icon="inbox" slot="item-icon"></iron-icon>
                    <span class="nav-tool">Board Event</span>
                </paper-icon-item>
            </a>


            <a selected?="${_page === 'Register'}" href="/Register">
                <paper-icon-item class="iconItem" role="option" >
                    <iron-icon icon="inbox" slot="item-icon"></iron-icon>
                    <span class="nav-tool">ลงทะเบียน (เว็บไซต์)</span>
                </paper-icon-item>
            </a>

        <h3>Contact</h3>

        </app-drawer>

        <!-- Main content -->
        <main role="main" class="main-content">
            <div class="bg-content">
                <view-work class="page" active?="${_page === 'Work'}"></view-work>
                <view-boardevent class="page" active?="${_page === 'Boardevent'}"></view-boardevent>
                <view-register class="page" active?="${_page === 'Register'}"></view-register>
            </div>
        </main>

    </app-drawer-layout>
</app-header-layout>
`
    }
    _toggle(){
        this.shadowRoot.querySelector('.app-drawer').toggle()
    }

    _didRender(properties, changeList) {
        if ('_page' in changeList) {
          const pageTitle = properties.appTitle + ' - ' + changeList._page;
          updateMetadata({
              title: pageTitle,
              description: pageTitle
              // This object also takes an image property, that points to an img src.
          });
        }
      }
    
      _stateChanged(state) {
        this._page = state.app.page;
        this._offline = state.app.offline;
        this._snackbarOpened = state.app.snackbarOpened;
        this._drawerOpened = state.app.drawerOpened;
      }
}

customElements.define('my-app', MyApp);
