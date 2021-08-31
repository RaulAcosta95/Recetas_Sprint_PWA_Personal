import { LitElement, html } from "lit-element";

class AddComponent extends LitElement{
    static get properties(){
        return {

        }
    }
    constructor(){
        super();
    }
    render(){
        return html `
                    <link rel="stylesheet" href="./css/apoyo.css">

            <div class="addComponent">
                <button><img src='./images/plus.svg'></button>
            </div>
        `
    }
}
customElements.define('add-component', AddComponent);