const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<div class="ui inverted vertical segment">
    <p id="contact_0">Contact: tell 24/7: <a>+31 72 4567 98 45</a></p>
    <p id="contact_1">Email 24/7, krijgt binnen 48u antwoord: <a>ParkX@hallodaar.com</a></p>
    <p id="contact_2">Adres: Den Hoorn 1373 AC, nummer 77</p>
</div>

<style>
    div {
        margin-top: 2em !important;
        padding: 2em 4em !important;
    }
</style>
`;

footerTranslations = [
    { sel: "#contact_0", type: "html", nl: "Contact: tell 24/7: <a>+31 72 4567 98 45</a>", en: "Contact: tell 24/7: <a>+31 72 4567 98 45</a>" },
    { sel: "#contact_1", type: "html", nl: "Email 24/7, krijgt binnen 48u antwoord: <a>ParkX@hallodaar.com</a>", en: "Email 24/7, answer within 48h: <a>ParkX@hallodaar.com</a>" },
    { sel: "#contact_2", type: "html", nl: "Adres: Den Hoorn 1373 AC, nummer 77", en: "Address: Den Hoorn 1373 AC, number 77" },
];

class PageFooter extends HTMLElement {
    shadow;

    constructor() {
        super();
    }
  
    connectedCallback() {
        const semantic = document.querySelector('link[href*="semantic"]');
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.shadow.appendChild(document.importNode(footerTemplate.content, true));
        if (semantic) this.shadow.appendChild(semantic.cloneNode());
    }

    setTranslation() {
        TranslatePage(this.shadow, footerTranslations);
    }
  }
  
  customElements.define('page-footer', PageFooter);