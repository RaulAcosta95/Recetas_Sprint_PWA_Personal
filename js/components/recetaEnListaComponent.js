import { LitElement, html } from "lit-element";
class RecetaEnListaComponent extends LitElement{
    static get properties(){
        return {}
    }
    constructor(){
        super();
    }
    render(){
        return html `
            <style>
            .recetaEnListaComponent *{
                margin:0;
                padding:0;
            }
            .recetaEnListaComponent{
                background-color: white;
                width: 80vw;
                margin-top: 20px;
                margin-bottom: 20px;
                font-family: sans-serif;
                border-radius: 10px 10px 10px 10px;
                -moz-border-radius: 10px 10px 10px 10px;
                -webkit-border-radius: 10px 10px 10px 10px;
                border: 0px solid #000000;

                display: flex;
                align-items: center;
            }
            .recetaEnListaComponent .dishImage{
                width: 50px;
                margin:10px;
                float:left;
            }
            .recetaEnListaComponent .contenedorInfo{
                width: 70%;
            }
            .recetaEnListaComponent button{
                background-color:rgba(172, 128, 128,.0);
                margin: 10px;
                border:none;
                cursor:pointer;
            }
            .recetaEnListaComponent .contenedorBoton{
                width: 20%;
                height: 100%;
                display: flex;
                justify-content:flex-end;
                align-items:flex-end;
            }
            </style>
            <div class="recetaEnListaComponent">
                <img class="dishImage" src="./images/dish.png">
                <div class="contenedorInfo">
                    <h3>Title </h3>
                    <p>info</p>
                </div>
                <div class="contenedorBoton">
                    <button>
                        <img src="./images/delete.png">
                    </button>
                </div>
            </div>
        `
    }
}
customElements.define('receta-en-lista', RecetaEnListaComponent);