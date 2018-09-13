import { LitElement, html } from '@polymer/lit-element';

import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { SharedStyles } from './shared-styles.js';
import { menuIcon } from './my-icons.js';

import { store } from '../src/store.js';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@polymer/iron-selector/iron-selector.js'
import '@vaadin/vaadin-button/vaadin-button.js';

// These are the actions needed by this element.
import {
    navigate,
    updateOffline,
    updateDrawerState,
    updateLayout
  } from './action/app.js';

import './component/view-register.js'

class MyApp extends connect(store)(LitElement) {



    static get properties() {
        return {
            _drawerOpened: Boolean,
            _page: String
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




    _render({_drawerOpened,_page}) {
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
            <paper-icon-button icon="polymer"></paper-icon-button>
            <div main-title>Smart Register</div>
            <div class="account-menu">
                <paper-icon-button icon="event"></paper-icon-button>
                <paper-icon-button icon="subdirectory-arrow-right"></paper-icon-button>
            </div>
        </app-toolbar>
    </app-header>

    <app-drawer-layout>
        <!-- App drawer -->
        <app-drawer slot="drawer" position="left" persistent class="app-drawer">
            <app-toolbar class="nav-tool"></app-toolbar>
            <h3>Menu</h3>

            <a selected?="${_page === 'view1'}" href="/view1">test</a>
            <a selected?="${_page === 'qrcode'}" href="/qrcode">register</a>
            
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
                <my-view1 class="page" active?="${_page === 'view1'}"></my-view1>
                <view-register class="page" active?="${_page === 'qrcode'}"></view-register>
        </main>

    </app-drawer-layout>
</app-header-layout>
`
    }
  
    _nav1(e){
        console.log("eiei",e)
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
