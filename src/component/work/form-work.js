import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';



class WalkWork extends PolymerElement {
    static get properties() {
        return {
            data: {
                type: Object,
                value: {}
            },
            edit: {
                type : Boolean,
                value : false
            }
        }
    }

    static get template() {
        return html`<style>
    .column {
        padding-top: 24px;
        float: left;
        width: 50%;
        }
        .column2{
        padding-top: 24px;
        float: left;
        width: 20%;
        }
    .row:after {
        content: "";
        display: table;
        clear: both;
        }
</style>

<div class="row">
   <div class="column" style=" text-align:center;">
    <h3> (Walk-in)</h3>    
        <vaadin-text-field required label="ชื่อ" style="width:20em"
            name="fname" on-input="_valueChanged" value="[[data.fname]]"></vaadin-text-field>
        <br>
        <vaadin-text-field required  label="นามสกุล" style="width:20em" name="lname"
            on-input="_valueChanged" value="[[data.lname]]"></vaadin-text-field>
        <br>
        <vaadin-dropdown-menu label="คณะ" style="width:20em">
            <template>
                <vaadin-list-box on-click="dropboxValue1">
                    <vaadin-item>วิศวกรรมศาสตร์</vaadin-item>
                    <vaadin-item>ครุศาสตร์อุตสาหกรรม</vaadin-item>
                    <vaadin-item>วิทยาลัยเทคโนโลยีอุตสาหกรรม</vaadin-item>
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
        <vaadin-text-field required label="สาขา/หน่วยงาน" style="width:20em" name="dep" on-input="_valueChanged" value="[[data.dep]]"></vaadin-text-field>

        <br>

        <vaadin-button theme="contrast primary" on-click="Submit">Submit</vaadin-button>
    </div>

    <div class="column2" style=" text-align:center;">
        <h3>เข้างานด้วย QR-Code</h3>
        <vaadin-text-field  label="สแกน QR-Code" style="width:20em" name="lname"
                on-input="_onChange" autofocus value="[[data.lname]]"></vaadin-text-field>
    </div>
</div>
`
    }
    Submit() {

        if (this.edit == false) {
            if (Object.keys(this.data).length  < 1 ) {
                console.log(Object.keys(this.data).length)
            }
            else {
                this.dispatchEvent(new CustomEvent('addData', { detail: this.data }))
                console.log(this.data)
            }
        }
        else if (this.edit == true) {
            this.dispatchEvent(new CustomEvent('updateData', { detail: this.data }))
        }
    }
    //faculty
    dropboxValue1(e) {
        this.data.fac = e.target.value
    }
    _valueChanged(e) {
        this.set('data.' + e.target.getAttribute("name"), e.target.value)
    }
    _onChange(e){
        console.log(e.target.value)
    }
}
customElements.define('form-work', WalkWork);

