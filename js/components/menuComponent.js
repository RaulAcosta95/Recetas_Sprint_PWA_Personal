import { LitElement,html, property } from "lit-element";
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
                .componenteMenu a{
                    padding-left: 20px;
                }

                .componenteMenu div:active, .componenteMenu div:hover{
                    background-color: rgb(240, 235, 230);
                }
            </style>
            <div class="componenteMenu">
                <h2>FOOD NINJA</h2>
                <div class="Home">
                    <a>Home</a>
                </div>
                <div class="About">
                    <a>About</a>
                </div>
                <hr>
                <div class="Contact">
                    <img src="./images/mail.svg">
                    <a>Contact</a>
                </div>
            </div>
        `
    }
}
customElements.define('menu-component', MenuComponent);