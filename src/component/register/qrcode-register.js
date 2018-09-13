import { LitElement, html } from '@polymer/lit-element';



class MyQrcode extends LitElement {



    static get properties() {
        return {

        };
    }

    constructor() {
        super();
        this.test = "superK";
    }

    _firstRendered() {
        // Firebase.popup()
    }

    _render() {
        return html`
        <canvas id="canvas"></canvas><br>

        <button on-click="${(e) => this._testCanvas(e)}">to Canvas</button>
        <button on-click="${(e) => this._testDataURL(e)}">to DataURL</button>
        <button on-click="${(e) => this._testString(e)}">to String</button>

        <input type="text" id="data"></input>
        <button on-click="${(e) => this._genText(e)}">>Get QR-Code</button>
        `
    }
    //ok
    _genText(){
        var canvas = this.shadowRoot.querySelector('#canvas')
        var data =  this.shadowRoot.querySelector('#data').value
        QRCode.toCanvas(canvas, data, { scale: 10 }, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }
    _testCanvas() {
        var canvas = this.shadowRoot.querySelector('#canvas')
        QRCode.toCanvas(canvas, '5802041610011', { scale: 10 }, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }
    _testDataURL() {
          QRCode.toDataURL(this.test, { scale: 10 },function (err, url) {
            console.log(url)
          })
    }
    //ok
    _testString() {
        QRCode.toString('5802041610011', function (err, string) {
            if (err) throw err
            console.log(string)
          })
    }


}

customElements.define('qrcode-register',MyQrcode);
