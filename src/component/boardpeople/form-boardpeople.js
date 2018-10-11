import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js'
import '@vaadin/vaadin-grid/vaadin-grid.js'
import '@vaadin/vaadin-button/vaadin-button.js'


class FormBoardPeople extends PolymerElement {
  static get properties() {
    return {
      item: {
        type: Array,
        value: ["",""]
      },
      Data: {
        type : Object,
        value: {
          fname: "นายเกรียงไกร",
          lname: "แก้วอบเชย",
          state: "Walk-in"
        }
      }
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
                          
                            เข้าอบรบในเรื่อง : การสัมนาเพื่อหา .....<br>
                            ติดต่อ : 123-456-789<br>
                            วันที่ : 32 ธันวาคม 2561
                            <small></small>
                          </p>
                        </div>
                    </template>

 
                <vaadin-grid-column>
                    <template class="header">ชื่อจริง</template>
                    <template>[[Data.fname]]</template>
                    <template class="footer">ชื่อจริง</template>
                </vaadin-grid-column>

                <vaadin-grid-column>
                    <template class="header">สกุล</template>
                    <template>[[Data.lname]]</template>
                    <template class="footer">สกุล</template>
                </vaadin-grid-column>
                
                <vaadin-grid-column>
                    <template class="header">สถานะ</template>
                    <template>[[Data.state]]</template>
                    <template class="footer">สถานะ</template>
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
              </vaadin-grid-column>-->
        
            </vaadin-grid>
            `
  }



}
customElements.define('form-boardpeople', FormBoardPeople);