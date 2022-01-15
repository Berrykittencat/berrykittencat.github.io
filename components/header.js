const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="ui fluid raised segment">
    <h2 class="ui left floated header">
        <img class="ui image" src="images/logo.png">
        <div class="content">Sunset Grove</div>
    </h2>
    <div id="translation" class="ui right floated tiny buttons">
        <button class="ui button pink active" onclick="SetLanguageCookie('nl')">NL</button>
        <button class="ui button" onclick="SetLanguageCookie('en')">EN</button>
    </div>
    <img class="ui fluid rounded image" src="images/banner1_crop.png">
    <nav class="ui horizontal bulleted link large list">
        <a id="nav_0" class="item" href="index.html">Overzicht</a>
        <a id="nav_1" class="item" href="accommodatie.html">Accommodatie</a>
        <a id="nav_2" class="item" href="faciliteiten.html">Faciliteiten</a>
        <a id="nav_3" class="item" href="activiteiten.html">Activiteiten</a>
        <a id="nav_4" class="item" href="restaurants.html">Restaurants & Shops</a>
        <a id="nav_5" class="item" href="trips.html">Trips</a>
        <a id="nav_6" class="item" href="prijzen.html">Prijzen</a>
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

headerTranslations = [
    { sel: "#nav_0", type: "text", nl: "Overzicht", en: "Overview" },
    { sel: "#nav_1", type: "text", nl: "Accommodatie", en: "Accommodation" },
    { sel: "#nav_2", type: "text", nl: "Faciliteiten", en: "Facilities" },
    { sel: "#nav_3", type: "text", nl: "Activiteiten", en: "Activities" },
    { sel: "#nav_4", type: "text", nl: "Restaurants & Shops", en: "Restaurants & Shops" },
    { sel: "#nav_5", type: "text", nl: "Trips", en: "Trips" },
    { sel: "#nav_6", type: "text", nl: "Prijzen", en: "Pricelist" },
    { sel: "#nav_7", type: "text", nl: "Plattegrond", en: "Map" }
];

class NavHeader extends HTMLElement {
    shadow;

    constructor() {
        super();
    }

    connectedCallback() {
        const semantic = document.querySelector('link[href*="semantic"]');
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.shadow.appendChild(document.importNode(headerTemplate.content, true));
        this.shadow.getElementById("nav_" + this.getAttribute("page")).classList.add("active");
        if (semantic) this.shadow.appendChild(semantic.cloneNode());
    }

    setTranslation() {
        var isDutch = lang == "nl";
        this.shadow.getElementById("translation").firstElementChild.className = isDutch ? "ui button pink active" : "ui button";
        this.shadow.getElementById("translation").lastElementChild.className = isDutch ? "ui button" : "ui button pink active";
        TranslatePage(this.shadow, headerTranslations);
    }
}
  
customElements.define('nav-header', NavHeader);