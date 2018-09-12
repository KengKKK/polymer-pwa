import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';



class FormRegister extends PolymerElement {
    static get properties() {
        return {
            item: Object
        }
    }

    static get template() {
        return html`


        <center>
            <vaadin-text-field required  error-message="กรุณาใส่ชื่อ" label="ชื่อจริง (ระบุคำนำหน้าด้วย)" style="width:20em"
            name="fname" on-input="_valueChanged" value="[[data.fname]]"></vaadin-text-field>
        <br>
        <vaadin-text-field required  error-message="กรุณาใส่นามสกุล" label="นามสกุล" style="width:20em"
            name="lname" on-input="_valueChanged" value="[[data.lname]]"></vaadin-text-field>
        <br>
        <vaadin-dropdown-menu label="คณะ" style="width:20em">
        <template >
            <vaadin-list-box on-click="dropboxValue1">
            <vaadin-item>วิศวกรรมศาสตร์</vaadin-item>
            <vaadin-item >ครุศาสตร์อุตสาหกรรม</vaadin-item>
            <vaadin-item >วิทยาลัยเทคโนโลยีอุตสาหกรรม</vaadin-item>
            <vaadin-item>วิทยาศาสตร์ประยุกต์</vaadin-item>
            <vaadin-item>อุตสาหกรรมเกษตร</vaadin-item>
            <vaadin-item>เทคโนโลยีและการจัดการอุตสาหกรรม</vaadin-item>
            <vaadin-item>เทคโนโลยีสารสนเทศ</vaadin-item>
            <vaadin-item>ศิลปศาสตร์ประยุกต์</vaadin-item>
            <vaadin-item>สถาปัตยกรรมและการออกแบบ</vaadin-item>
            <vaadin-item>บริหารธุรกิจ</vaadin-item>
            <vaadin-item>วิทยาลัยนานาชาติ</vaadin-item>
            <vaadin-item>วิทยาศาสตร์ พลังงานและสิ่งแวดล้อม</vaadin-item>
            <vaadin-item>วิศวกรรมศาสตร์และเทคโนโลยี</vaadin-item>
            <vaadin-item>บริหารธุรกิจและอุตสาหกรรมบริการ</vaadin-item>
            <vaadin-item>พัฒนาธุรกิจและอุตสาหกรรม</vaadin-item>
            </vaadin-list-box>
        </template>
        </vaadin-dropdown-menu>
        <br>
        <vaadin-text-field required  label="สาขา/หน่วยงาน" style="width:20em"
        name="dep" on-input="_valueChanged" value="[[data.dep]]"></vaadin-text-field>
        <br>
        <hr style="width:25%">
            <vaadin-button on-click="Submit">Submit</vaadin-button>
        </center>
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
customElements.define('form-register', FormRegister);

