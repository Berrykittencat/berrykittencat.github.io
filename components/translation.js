function SetLanguageCookie(languageCode) {
    console.log(`lang=${languageCode}; path=/`);
    document.cookie = "lang=" + languageCode + "; path=/";
    console.log(document.cookie);
}

function GetLanguageCookie() {
    const value = `; ${document.cookie}`;
    console.log(document.cookie);
    const parts = value.split(`; lang=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return "nl";
}

var langCookie = GetLanguageCookie();
var elem = document.getElementById("translation");
SetLanguageCookie("en");