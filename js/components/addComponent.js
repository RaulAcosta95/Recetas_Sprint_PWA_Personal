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
            <style>
                .addComponent *{
                    margin: 0;
                    padding:0;
                }
                .addComponent{
                    display: flex;
                    justify-content: center;
                }
                .addComponent button{
                    background-color: rgb(202, 202, 202);
                    width: 30px;
                    height: 30px;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    cursor:pointer;
                    border:none;
                    border-radius: 50%;
                }
                .addComponent button:hover{
                    background-color: rgb(185, 185, 185);
                    transition: 1s;
                }
                .addComponent img{
                    width: 10px;
                    height: 10px;
                }
            </style>
            <div class="addComponent">
                <button><img src='./images/plus.svg'></button>
            </div>
        `
    }
}
customElements.define('add-component', AddComponent);