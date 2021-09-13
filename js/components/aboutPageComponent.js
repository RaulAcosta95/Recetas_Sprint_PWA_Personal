import { LitElement , html} from "lit-element"
class AboutPageComponent extends LitElement{
    constructor(){
        super();
        console.log('pagina About');
    }
    static get properties(){
        return {

        }
    }
    render(){
        return html`
        <style>
            .about *{
                margin:0;
                padding:0;
                color: rgb(107, 107, 107);
            }
            .about h2{
                text-align:center;
                padding-top:20px;
                margin-bottom:20px;
            }
            .about p{
                text-align:left;
                margin:10px;
            }
        </style>
            <div class="about">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, repellendus excepturi mollitia officia consequuntur aliquid iusto aperiam nulla labore temporibus ab nisi id facilis voluptate veniam eligendi rem illum nesciunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, repellendus excepturi mollitia officia consequuntur aliquid iusto aperiam nulla labore temporibus ab nisi id facilis voluptate veniam eligendi rem illum nesciunt!</p>
            </div>
        `
    }
    
}
customElements.define('about-page', AboutPageComponent);