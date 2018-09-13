import { html } from '@polymer/lit-element';

export const SharedStyles = html`
<style>


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
paper-icon-item{
    display: flex;
    padding: 10px 16px;
}
paper-item{
    display: block;
    position: relative;
    min-height: var(--paper-item-min-height, 48px);
    padding: 0px 16px;
}


.main-content {
    padding: 16px;
}

.blueHeader {
    font-weight: bold;
    background-color: #4285f4;
    color: #fff;
}
.blueHeader paper-icon-button {
    --paper-icon-button-ink-color: white;
}

app-drawer-layout{
    
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

.iconItem {
color: #666;
}
.form-register{
    background-color: #fafafa;

}
span.nav-tool{
    padding-left:4px;
}

</style>
`;
