const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="ui fluid raised segment">
    <h2 class="ui left floated header">
        <img class="ui image" src="images/logo.png">
        <div class="content">Vakantiepark X</div>
    </h2>
    <div id="translation" class="ui right floated tiny buttons">
        <button class="ui button positive active">NL</button>
        <button class="ui button">EN</button>
    </div>
    <img class="ui fluid rounded image" src="images/banner1_crop.png">
    <nav class="ui horizontal bulleted link large list">
        <a id="nav_0" class="item" href="index.html">Overzicht</a>
        <a id="nav_1" class="item" href="accommodatie.html">Accommodatie</a>
        <a id="nav_2" class="item" href="index.html">Faciliteiten</a>
        <a id="nav_3" class="item" href="index.html">Activiteiten</a>
        <a id="nav_4" class="item" href="index.html">Restaurants & Shops</a>
        <a id="nav_5" class="item" href="index.html">Trips</a>
        <a id="nav_6" class="item" href="index.html">Prijzen</a>
        <a id="nav_7" class="item" href="plattegrond.html">Plattegrond</a>
    </nav>
</header>

<style>
    header {
        padding: 0.5em 4em 1.5em !important;
    }

    header > h2 {
        margin-bottom: 0.5em !important;
    }

    header > h2 > img {
        width: 4em !important;
        margin-right: -0.5em;
    }

    header > .tiny.buttons {
        margin-top: 14px !important;
    }
</style>
`;

class NavHeader extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        const semantic = document.querySelector('link[href*="semantic"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);
        shadowRoot.getElementById("nav_" + this.getAttribute("page")).classList.add("active");
        if (semantic) shadowRoot.appendChild(semantic.cloneNode());
    }
  }
  
  customElements.define('nav-header', NavHeader);