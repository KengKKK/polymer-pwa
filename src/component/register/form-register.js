import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

class FormRegister extends PolymerElement {
    static get properties() {
        return {
            data: {
                type: Object,
                value: {}
            },
            edit: {
                type: Boolean,
                value: false
            }
        }
    }

    static get template() {
        return html`
        <!-- <style>
    .column {
        padding-top: 24px;
        float: left;
        width: 50%;
        } */
        /* .column2{
        padding:55px 0px 0px 18px;
        float: left;
        width: 40%;
        }
    .row:after {
        content: "";
        display: table;
        clear: both;
        }
</style> -->


<center>
<div>
<paper-input  name="fname" required auto-validate error-message="needs some text!" label="ชื่อจริง (ระบุคำนำหน้าด้วย)" always-float-label style="width:20em" on-input="_valueChanged" value="[[data.fname]]"></paper-input>
<paper-input name="lname" required auto-validate error-message="needs some text!" label="นามสกุล" always-float-label style="width:20em" on-input="_valueChanged" value="[[data.lname]]"></paper-input>

</div>

<!-- <div class="row" >
    <div class="column" >
        <vaadin-text-field required error-message="กรุณาใส่ชื่อ" label="ชื่อจริง (ระบุคำนำหน้าด้วย)" style="width:20em"
            name="fname" on-input="_valueChanged" value="[[data.fname]]"></vaadin-text-field>
        <br>
        <vaadin-text-field required error-message="กรุณาใส่นามสกุล" label="นามสกุล" style="width:20em" name="lname"
            on-input="_valueChanged" value="[[data.lname]]"></vaadin-text-field> -->

        
        <!-- <vaadin-dropdown-menu label="คณะ" style="width:20em">
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
        </vaadin-dropdown-menu> -->
        

<paper-input name="dep" required auto-validate error-message="needs some text!" label="สาขา/หน่วยงาน" always-float-label style="width:20em" on-input="_valueChanged" value="[[data.dep]]"></paper-input>
<paper-input name="email" required auto-validate error-message="needs some text!" placeholder="ใส่อีเมล์เพื่อรับ QR-Code เข้างาน"  label="Email" always-float-label style="width:20em"  on-input="_valueChanged" value="[[data.email]]"></paper-input>

        <!-- <vaadin-text-field required label="สาขา/หน่วยงาน" style="width:20em" name="dep" on-input="_valueChanged" value="[[data.dep]]"></vaadin-text-field>
        <br>
        <vaadin-text-field required label="Email" style="width:20em" placeholder="ใส่อีเมล์เพื่อรับ QR-Code เข้างาน"
            name="email" on-input="_valueChanged" value="[[data.email]]"></vaadin-text-field>
        <br> -->
<br>
        <vaadin-button theme="contrast primary" on-click="Submit">Submit</vaadin-button>
    </div>

    <!-- <div class="column2" >
        <input id="image" type="image" src="https://image.ibb.co/fOU4zp/google.png" on-click="ClicktoGmail"><br>
    </div> -->
</div>
</center>
`
    }

    
    ClicktoGmail() {
        console.log("Gamil ok")
    }
    Submit() {
        if (this.edit == false) {
            if (Object.keys(this.data).length < 1) {
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
}
customElements.define('form-register', FormRegister);

