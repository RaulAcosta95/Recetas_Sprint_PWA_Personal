import { LitElement , html} from "lit-element"
class ContactPageComponent extends LitElement{
    constructor(){
        super();
        console.log('pagina contacto');
    }
    static get properties(){
        return {

        }
    }
    render(){
        return html`
        <style>
            .contact *{
                margin:0;
                padding:0;
                color: rgb(107, 107, 107);
            }
            .contact h2{
                text-align:center;
                padding-top:20px;
                margin-bottom:20px;
            }
            .contact p{
                text-align:left;
                margin:10%;
            }
        </style>
            <div class="contact">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, repellendus excepturi mollitia officia consequuntur aliquid iusto aperiam nulla labore temporibus ab nisi id facilis voluptate veniam eligendi rem illum nesciunt!</p>
                <p>Find us at</p>
                <p> 123 Spicy Noodle Food</p>
                <p>Manchester, UK</p>
            </div>
        `
    }
    
}
customElements.define('contact-page', ContactPageComponent);