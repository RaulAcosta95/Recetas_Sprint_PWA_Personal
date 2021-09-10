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

                .addComponent .containerButtonAdd{
                    display: flex;
                    justify-content: center;
                    flex-wrap:wrap;
                    width:100%;
                }
                .addComponent #addButton{
                    background-color: rgb(202, 202, 202);
                    width: 30px;
                    height: 30px;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    cursor:pointer;
                    border:none;
                    border-radius: 50%;
                }
                .addComponent #addButton:hover{
                    background-color: rgb(185, 185, 185);
                    transition: 1s;
                }
                .addComponent #addButton img{
                    width: 10px;
                    height: 10px;
                }
                .formNuevaReceta{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .formNuevaReceta form label, .formNuevaReceta form input{
                    display: block;
                }
                .formNuevaReceta button{
                    margin-top: 10px;
                    padding: 5px;
                }
            </style>
            <div class="addComponent">
                <div class="containerButtonAdd">
                    <button id="addButton" @click=${this._formNuevaReceta}><img src='./images/plus.svg'></button>
                </div>
                <div class="formNuevaReceta"></div>
            </div>
        `
    }
    _formNuevaReceta(){
        console.log('form nueva receta');
        let addComponent = this.shadowRoot.querySelector('.formNuevaReceta');

        if(addComponent.hasChildNodes()){
            addComponent.innerHTML = null;
        } else {
            addComponent.innerHTML=`
            <form action="">
                <h2>Nueva Receta</h2>
                <label for="title">Title</label>
                <input type="text" id="title">
                <label for="ingredients">Ingredients</label>
                <input type="text" id="ingredients">
                <button>AÑADIR</button>
            </form>
        `
        }
    }
}
customElements.define('add-component', AddComponent);