import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'


import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';


class FormBoardEvent extends PolymerElement {
  static get template() {
    
    return html`
        <style>
 
      .column {
    float: left;
    width: 45%;
    padding: 10px;
    top: 5px;
    padding-left: 50px;
    /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
paper-button.green {
      background-color: var(--paper-green-500);
      color: white;
    }
      </style>

<div class="row">
      <div class="column">
        <paper-card image="/images/src/1.jpg" style="width:100%; height:50px"> 
          <div class="card-content">
            <div class="cafe-header">ชื่องาน ...........
              <div class="cafe-location cafe-light">
                <iron-icon icon="communication:location-on"></iron-icon>
              </div>
            </div>
            <div class="cafe-rating">
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
            </div>
            <p>$ ตึก 52 คณะครุศาสตร์อุตสาหกรรม</p>
            <p class="cafe-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
          </div>
          <div class="card-actions">
            <div class="horizontal justified">
              <paper-icon-button icon="icons:event"></paper-icon-button>
              <span>09.00 - 16.00 PM</span>
              <span>วันที่ 16 มกราคม 2561</span>
              <paper-button raised class="green" ><iron-icon icon="favorite"></iron-icon>ดูรายละเอียด</paper-button>
            </div>
          </div>
        </paper-card>
    </div>

              <div class="column">
        <paper-card image="/images/src/2.jpg" style="width:100%; height:50px"> 
          <div class="card-content">
            <div class="cafe-header">ชื่องาน ...........
              <div class="cafe-location cafe-light">
                <iron-icon icon="communication:location-on"></iron-icon>
              </div>
            </div>
            <div class="cafe-rating">
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
            </div>
            <p>$ อาคารนวมินทรราชินี</p>
            <p class="cafe-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
          </div>
          <div class="card-actions">
            <div class="horizontal justified">
              <paper-icon-button icon="icons:event"></paper-icon-button>
              <span>09.00 - 16.00 PM</span>
              <span>วันที่ 16 มกราคม 2561</span>
              <paper-button raised class="green"><iron-icon icon="favorite"></iron-icon>ดูรายละเอียด</paper-button>
            </div>
          </div>
        </paper-card>
    </div>
</div>

  

    
    

    `;
  }


}
customElements.define('form-boardevent', FormBoardEvent);