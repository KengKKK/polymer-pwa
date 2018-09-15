import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js'
import '@vaadin/vaadin-grid/vaadin-grid.js'
import '@vaadin/vaadin-button/vaadin-button.js'


class FormBoardEvent extends PolymerElement {
  static get properties() {
    return {
      item: Object
    }
  }

  static get template() {
    return html`
    [[item]]
            <vaadin-grid id="grid" aria-label="Basic Binding Example" items="[[item]]" on-click="_check">
            
              <vaadin-grid-selection-column auto-select>
              </vaadin-grid-selection-column>
 
                <vaadin-grid-column>
                    <template class="header">สาขา/หน่วยงาน</template>
                    <template>[[item]]</template>
                    <template class="footer">สาขา/หน่วยงาน</template>
                </vaadin-grid-column>

                <vaadin-grid-column>
                    <template class="header">จำนวนที่เปิดรับ</template>
                    <template>"sadf"</template>
                    <template class="footer">จำนวนที่เปิดรับ</template>
                </vaadin-grid-column>

                <vaadin-grid-column>
                    <template class="header">จำนวนที่เปิดรับ</template>
                    ฟหกด
                    <template class="footer">จำนวนที่เปิดรับ</template>
                </vaadin-grid-column>
                
              <!-- <vaadin-grid-column width="5em">
                <template>
                  <div>
                    <vaadin-button type-data="del" index-data$="[[item.ID]]" disabled$="[[!selected]]">ลบ</vaadin-button>
                    <vaadin-button type-data="edit" index-data$="[[item.ID]]" disabled$="[[!selected]]">แก้ไข</vaadin-button>
                  </div>
                </template>
              </vaadin-grid-column> -->
        
            </vaadin-grid>
            `
  }

  _check(e) {

    var type = e.target.getAttribute('type-data')
    // EDIT
    if (type == 'edit') {
      this.dispatchEvent(new CustomEvent('edit', { detail: Number(e.target.getAttribute('index-data')) }))

    }
    // DELETE
    else if (type == 'del') {
      this.dispatchEvent(new CustomEvent('del', { detail: Number(e.target.getAttribute('index-data')) }))
    }
    else {
      this.dispatchEvent(new CustomEvent('dels', { detail: this.$.grid.selectedItems }))
    }
  }


}
customElements.define('form-boardevent', FormBoardEvent);