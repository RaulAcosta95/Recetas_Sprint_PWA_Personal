import { LitElement,html, property } from "lit-element";
export class MenuComponent extends LitElement{
    static get property(){
        return {
            title1: {type: String},
            title2: {type: String},
            backgroundColorRGB: {type: String},
            textTitleColorRGB1: {type: String},
            textTitleColorRGB2: {type: String}
        }
    }
    constructor(){
        super();
        this.title1 = "";
        this.title2 = "";
        this.backgroundColorRGB = '255, 233, 209';
        this.textTitleColorRGB1 = '203, 134, 63';
        this.textTitleColorRGB2 = '231, 192, 154';
    }
    render(){
        return html `
            <style>

            </style>
            <!-- <link rel="stylesheet" href="./css/apoyo.css"> -->
            <div class="componenteMenu">
            <h2><span id="title1">${this.title1}</span><span id="title2">${this.title2}</span></h2>
                <a>Pagina 1</a>
                <a>Pagina 2</a>
                <a>Pagina 3</a>
            </div>
        `
    }
}
customElements.define('menu-component', MenuComponent);