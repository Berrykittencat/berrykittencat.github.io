var lang;

function TranslatePage(element, dictionary) {
    var isDutch = lang == "nl";

    for (var entry of dictionary) {
        for (var node of element.querySelectorAll(entry.sel)) {
            switch (entry.type) {
                case "text":
                    node.innerText = isDutch ? entry.nl : entry.en;
                    break;
                case "html":
                    node.innerHTML = isDutch ? entry.nl : entry.en;
                    break;
                case "img":
                    node.src = isDutch ? entry.nl : entry.en;
                    break;
                case "comp":
                    node.setTranslation();
                    break;
            }
        }
    }
}

function SetLanguageCookie(languageCode) {
    document.cookie = "lang=" + languageCode + "; path=/";
    lang = languageCode;
    TranslatePage(document, pageDictionary);
}

function GetLanguageCookie() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; lang=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    else
    {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        if (lang) return lang;
    }
    return "nl";
}

function InitTranslation() {
    lang = GetLanguageCookie();
    SetLanguageCookie(lang ?? 'nl');
}