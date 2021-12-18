const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<div class="ui inverted vertical segment">
    <p>Contact: tell 24/7: <a>+31 72 4567 98 45</a></p>
    <p>Email 24/7, krijgt binnen 48 antwoord: <a>ParkX@hallodaar.com</a></p>
    <p>Adres: Den Hoorn 1373 AC, nummer 77</p>
</div>

<style>
    div {
        margin-top: 2em !important;
        padding: 2em 4em !important;
    }
</style>
`;

class PageFooter extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        const semantic = document.querySelector('link[href*="semantic"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerTemplate.content);
        if (semantic) shadowRoot.appendChild(semantic.cloneNode());
    }
  }
  
  customElements.define('page-footer', PageFooter);