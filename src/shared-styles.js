import { html } from '@polymer/lit-element';

export const SharedStyles = html`<style>

/* General */
    h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        padding-left: 10px;
    }

    paper-icon-item {
        display: flex;
        padding: 10px 16px;
    }

/* Custom */
    .bg-content {
        margin: 25px 16px 0px 0px;
        background-color: #fafafa;
    }
    .iconItem {
        color: #666;
    }
    .iconItem[selected]{
        color: #231;
    }


/************************** App Layout *******************************/

/* Header */
    .blueHeader {
        font-weight: bold;
        background-color: #4285f4;
        color: #fff;
    }
    .blueHeader paper-icon-button {
        --paper-icon-button-ink-color: white;
    }
/* drawer */
    .app-drawer {
        --app-drawer-width: 240px;
        --app-drawer-scrim-background: rgba(250, 250, 100, 0.8);
        --app-drawer-content-container: {
            background-color: #fafafa;
        }
    }
    app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
    }
    app-drawer>a {
        text-decoration: none;
    }
    .nav-tool>[selected] {
        color: #fff;
    }

</style>`;
