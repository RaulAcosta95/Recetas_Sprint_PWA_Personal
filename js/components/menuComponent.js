import { LitElement,html, property } from "lit-element";
import './contactPageComponent'
import './addComponent'
import './listaDeRecetasComponent'
import './recetaEnListaComponent'
import './aboutPageComponent'
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
        let paginaRecetas = document.querySelector('#pageRecetas');
        let contenedorContact = document.querySelector('.contacto');
        let contenedorAbout = document.querySelector('.about');
    }
    render(){
        return html `
            <style>

                .componenteMenu{
                    margin-left: 25vw;
                    position: absolute;
                    width: 75vw;
                    background-color: rgb(255, 254, 253);
                    height: 100%;
                    transition: 0.5s;
                }
                .componenteMenu h2{
                    font-size: 15px;
                    padding-left: 20px;
                    color: rgb(143, 143, 143);
                }
                .componenteMenu div{
                    height: 40px;
                    width: 60%;
                    display: flex;
                    align-items: center;
                }
                .componenteMenu .Contact img{
                    padding-left: 20px;
                    width: 30px;
                }
                .componenteMenu button{
                    border:none;
                    padding-left: 20px;
                }

                .componenteMenu div:active, .componenteMenu div:hover{
                    background-color: rgb(240, 235, 230);
                    transition:0.5s;
                }
            </style>
            <div class="componenteMenu">
                <h2>FOOD NINJA</h2>
                <div class="Home">
                    <button @click=${this._appearHome}>Home</button>
                </div>
                <div class="About">
                    <button @click=${this._appearAbout}>About</button>
                </div>
                <hr>
                <div class="Contact">
                    <img src="./images/mail.svg" alt="Imagen de carta como correo electrónico" title="Imagen de carta como correo electrónico">
                    <button @click=${this._appearContact}>Contact</button>
                </div>
            </div>
        `
    }
    _appearContact(){
        let paginaRecetas = document.querySelector('#pageRecetas');
        let contenedorContact = document.querySelector('.contacto');
        let contenedorAbout = document.querySelector('.about');
        paginaRecetas.innerHTML="";
        contenedorAbout.innerHTML="";
        contenedorContact.innerHTML="<contact-page></contact-page>";
    }
    _appearHome(){
        let paginaRecetas = document.querySelector('#pageRecetas');
        let contenedorContact = document.querySelector('.contacto');
        let contenedorAbout = document.querySelector('.about');
        contenedorContact.innerHTML="";
        contenedorAbout.innerHTML="";
        paginaRecetas.innerHTML='<div class="recetas"><lista-recetas></lista-recetas></div><add-component></add-component>';
    }
    _appearAbout(){
        let paginaRecetas = document.querySelector('#pageRecetas');
        let contenedorContact = document.querySelector('.contacto');
        let contenedorAbout = document.querySelector('.about');
        paginaRecetas.innerHTML="";;
        contenedorContact.innerHTML="";
        contenedorAbout.innerHTML = "<about-page></about-page>";
    }
}
customElements.define('menu-component', MenuComponent);