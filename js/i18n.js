// Fonction pour charger et appliquer les traductions
function loadLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then((response) => response.json())
        .then((translations) => {
            document.querySelectorAll("[data-key]").forEach((el) => {
                const key = el.getAttribute("data-key");
                const translation = translations[key];
                console.log(key, translation);
                if (translation && typeof translation === "object") {
                    el.innerHTML = translation.value;
                    Object.keys(translation.styles).forEach((style) => {
                        el.style[style] = translation.styles[style];
                    });
                } else {
                    el.textContent = translation;
                }
            });
        });
}

// // Écouteur d'événements pour le sélecteur de langue
// document
//     .getElementById("language-selector")
//     .addEventListener("change", function () {
//         const selectedLanguage = this.value;
//         localStorage.setItem("preferredLanguage", selectedLanguage);
//         loadLanguage(selectedLanguage);
//     });
let mobile = false;
if (window.innerWidth <= 768) {
    mobile = true;
}
const FR = document.getElementById("FR");
const EN = document.getElementById("EN");
const FR_mobile = document.getElementById("FR-mobile");
const EN_mobile = document.getElementById("EN-mobile");
// Appliquez la langue préférée au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "fr"; // Langue par défaut
    loadLanguage(preferredLanguage);
    if (mobile) {
        if (preferredLanguage === "fr") {
            FR_mobile.classList.add("active");
            EN_mobile.classList.remove("active");
        } else {
            EN_mobile.classList.add("active");
            FR_mobile.classList.remove("active");
        }
        return;
    }
    if (preferredLanguage === "fr") {
        FR.classList.add("active");
        EN.classList.remove("active");
    } else {
        EN.classList.add("active");
        FR.classList.remove("active");
    }
});

function changeLanguage(lang) {
    loadLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
    if (mobile) {
        if (lang === "fr") {
            FR_mobile.classList.add("active");
            EN_mobile.classList.remove("active");
        } else {
            EN_mobile.classList.add("active");
            FR_mobile.classList.remove("active");
        }
        return;
    }
    if (lang === "fr") {
        FR.classList.add("active");
        EN.classList.remove("active");
    } else {
        EN.classList.add("active");
        FR.classList.remove("active");
    }
}

//if param in url set language
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get("lang");

if (lang) {
    changeLanguage(lang);
}
