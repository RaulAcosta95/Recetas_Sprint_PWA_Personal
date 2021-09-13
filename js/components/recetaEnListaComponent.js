import { LitElement, html } from "lit-element";
class RecetaEnListaComponent extends LitElement{
    static get properties(){
        return {
            idFirebase: {type: String},
            title: {type: String},
            ingredients: {type: String}
        }
    }
    constructor(){
        super();
        this.idFirebase = "";
        this.title = "";
        this.ingredients = "";
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
                width: 90vw;
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
                <img class="dishImage" src="./images/dish.png" alt="Plato de comida" title="Plato de comida">
                <div class="contenedorInfo">
                    <h3>${this.title} </h3>
                    <p>${this.ingredients}</p>
                </div>
                <div class="contenedorBoton">
                    <button @click=${this._eliminarReceta}>
                        <img src="./images/delete.png"alt="Botón borrar" title="Boton borrar">
                    </button>
                </div>
            </div>
        `
    }
    _eliminarReceta(){
        db.collection('recipes').doc(this.idFirebase).delete();
    }
}
customElements.define('receta-en-lista', RecetaEnListaComponent);