import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js'
import '@vaadin/vaadin-grid/vaadin-grid.js'
import '@vaadin/vaadin-button/vaadin-button.js'


class FormBoardEvent extends PolymerElement {
  static get properties() {
    return {
      item: {
        type: Array,
        value: [""]
      },
    }
  }


  static get template() {
    return html`
        <style>
      .details {
        display: flex;
        font-size: 14px;
        padding-left: 70px;
      }
      </style>

            <vaadin-grid id="grid" aria-label="Basic Binding Example" items="[[item]]">
            
              <vaadin-grid-selection-column auto-select>
              </vaadin-grid-selection-column>

                    <template class="row-details">
                        <div class="details">
                          <!-- <img src="[[item.picture.large]]"> -->
                          <p>
                            ผู้รับผิดชอบ : เก่ง เกรียงไกร<br>
                            ติดต่อ : 123-456-789
                            <small>[[item.email]]</small>
                          </p>
                        </div>
                    </template>

 
                <vaadin-grid-column>
                    <template class="header">ชื่อกิจกรรม</template>
                    <template>[[item.fname]]ประชุมเรื่อง .......</template>
                    <template class="footer">ชื่อกิจกรรม</template>
                </vaadin-grid-column>

                <vaadin-grid-column>
                    <template class="header">สถานที่</template>
                    <template>[[item.ename]]ตึก 52 คณะครุศาสตร์อุตสาหกรรม</template>
                    <template class="footer">สถานที่</template>
                </vaadin-grid-column>
                
                <vaadin-grid-column>
                    <template class="header">วันที่</template>
                    <template>[[item.ename]]32 ธันวาคม 2561</template>
                    <template class="footer">วันที่</template>
                </vaadin-grid-column>

                <vaadin-grid-column width="100px">
                <template class="header"></template>
                    <template>
                    <vaadin-checkbox aria-label$="Show Details for [[item.name.first]]" checked="{{detailsOpened}}">ดูรายละเอียด</vaadin-checkbox>
                    </template>
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



}
customElements.define('form-boardevent', FormBoardEvent);