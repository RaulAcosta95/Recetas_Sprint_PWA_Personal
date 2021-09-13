import { LitElement, html } from "lit-element";
import './menuComponent';
class menuDesplegableComponent extends LitElement{
    static get properties(){
        return{
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
            .menuDesplegableComponent *{
                margin:0;
                padding:0;
            }

            .menuDesplegableComponent{
                background-color: rgb(${this.backgroundColorRGB});
                height:40px;
                width: 100vw;
                display: flex;
                align-items: center;
                font-family: sans-serif;
            }
            .menuDesplegableComponent #title1{
                color: rgb(${this.textTitleColorRGB1});

            }
            .menuDesplegableComponent #title2{
                color: rgb(${this.textTitleColorRGB2});
            }
            .menuDesplegableComponent h2{
                text-align: center;
                float: left;
                width: 100vw;
            }
            .menuDesplegableComponent button{
                border:none;
                background-color:rgba(172, 128, 128,.0);
                right: 20px;
                width: 40px;
                cursor:pointer;
                position: absolute;
            }
            .menuDesplegableComponent img{
                width:100%;
            }
        </style>
        <!-- <link rel="stylesheet" href="./css/apoyo.css"> -->

            <div class="menuDesplegableComponent">
                <h2><span id="title1">${this.title1}</span><span id="title2">${this.title2}</span></h2>

                <button @click=${this.aparecerMenu}><img src='./images/menu.png' alt="Botón aparecer menú" title="Botón aparecer menú"></button>
            </div>
            <!-- <menu-component></menu-component> -->
        `
    }
    aparecerMenu(){
        let contenedorMenu = document.querySelector('.menu');
        if(contenedorMenu.hasChildNodes()){
            contenedorMenu.innerHTML = null;
        } else {
            contenedorMenu.innerHTML = '<menu-component title1="FOOD" title2="NINJA"></menu-component>';
        }
    }
}
customElements.define('menu-desplegable', menuDesplegableComponent);