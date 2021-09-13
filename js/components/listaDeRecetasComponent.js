import { LitElement , html} from "lit-element"
import './recetaEnListaComponent';
class ListaDeRecetasComponent extends LitElement{
    constructor(){
        super();
        console.log('Lista de recetas');
        this._db();
    }
    static get properties(){
        return {

        }
    }
    render(){
        return html`
        <div class="listaRecetas">
        </div>
        `
    }
    _db(){
        db.collection('recipes').onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change =>{
                if(change.type === 'added'){
                    // Añade la receta al DOM
                    this._pintarReceta(change.doc.data(), change.doc.id);
                } else if (change.type === 'removed'){
                    // Borra la receta del DOM
                    this._despintarReceta(change.doc.data(), change.doc.id);
                } else {
                    console.log('Acción de BD desconocida');
                }
            })
        });
    }
    _pintarReceta(data, id){
        let listaRecetas = this.shadowRoot.querySelector('.listaRecetas');
        listaRecetas.innerHTML += 
        `<receta-en-lista title="${data.title}" ingredients="${data.ingredients}" id="${id}" idFirebase="${id}"></receta-en-lista>`;
        console.log(id+' Añadido');

    }
    _despintarReceta(data,id){
        let listaRecetas = this.shadowRoot.querySelector('.listaRecetas');
        let recetaAEliminar = this.shadowRoot.querySelector(`#${id}`)
        listaRecetas.removeChild(recetaAEliminar);
        console.log(id+' Eliminado');

    }
    
}
customElements.define('lista-recetas', ListaDeRecetasComponent);