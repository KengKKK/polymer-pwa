import { html } from '@polymer/lit-element';

export const SharedStyles = html`<style>
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


    .bg-content {
        margin: 25px 16px 0px 0px;
        background-color: #fafafa;
    }



    .blueHeader {
        font-weight: bold;
        background-color: #4285f4;
        color: #fff;
    }

    .blueHeader paper-icon-button {
        --paper-icon-button-ink-color: white;
    }


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

    drawer>a {
        text-decoration: none;

        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
    }

    drawer>a[selected] {
        color: var(--app-drawer-selected-color);
    }

    .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
    }

    .iconItem {
        color: #666;
    }
</style>`;
