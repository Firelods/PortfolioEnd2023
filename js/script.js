// boolean to check if mobile or not
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

const gradCap = document.querySelector("#gradCap");
gradCap.addEventListener("click", (e) => {
    window.location.href = "school.html";
});

const folder = document.querySelector("#folder");
folder.addEventListener("click", (e) => {
    window.location.href = "index.html";
});

const titleAndDesc = document.querySelector(".title-and-desc");

const textForPolytech = [
    '<span class="span">2023 - 2026, Polytech Nice Sophia, Sophia Antipolis, France</span>',
    "<span class=\"span\">Je prépare actuellement le diplôme d'ingénieur en informatique dans lequel nous apprenons les fondements de l'algorithmique, du développement logiciel, de l'intelligence artificielle, de la cybersécurité, des réseaux et systèmes, et des bases de données</span>",
    "<span class=\"span\">Cette formation m'apporte des compétences techniques pointues en développement logiciel, en gestion de projets et en intelligence artificielle, ainsi qu'une solide expérience pratique grâce à mon alternance chez Thales Services Numériques</span>",
];
const polytechGroup = document.querySelector("#polytech-group");
function transitionPolytech() {
    if (isMobile) {
        if (polytechGroup.classList.contains("active")) {
            polytechGroup.classList.remove("active");
        } else {
            polytechGroup.classList.add("active");
        }
    } else {
        titleAndDesc.classList.add("transi");
        setTimeout(() => {
            document.querySelector(".etudiant-polytech").innerHTML =
                textForPolytech[0];
            document.querySelector(".en-alternance-thales").innerHTML =
                textForPolytech[1];
            document.querySelector(".passionn-d-aviation").innerHTML =
                textForPolytech[2];
        }, 300);
        setTimeout(() => {
            titleAndDesc.classList.remove("transi");
        }, 700);
    }
}

const textForTSN = [
    '<span class="span">2023 - 2026, Thales Services Numériques, Sophia Antipolis, France</span>',
    '<span class="span">Je suis actuellement en alternance chez Thales Services Numériques en tant qu\'apprenti ingénieur Full Stack</span>',
    '<span class="span">Je travaille sur des projets de développement web, de cybersécurité pour des clients internationaux</span>',
];

const tsnGroup = document.querySelector("#tsn-group");
function transitionTSN() {
    if (isMobile) {
        if (tsnGroup.classList.contains("active")) {
            tsnGroup.classList.remove("active");
        } else {
            tsnGroup.classList.add("active");
        }
    } else {
        titleAndDesc.classList.add("transi");
        setTimeout(() => {
            document.querySelector(".etudiant-polytech").innerHTML =
                textForTSN[0];
            document.querySelector(".en-alternance-thales").innerHTML =
                textForTSN[1];
            document.querySelector(".passionn-d-aviation").innerHTML =
                textForTSN[2];
        }, 300);
        setTimeout(() => {
            titleAndDesc.classList.remove("transi");
        }, 700);
    }
}

const textForTAS = [
    '<span class="span">Avril 2023 - Août 2023, Thales Alenia Space, Cannes, France</span>',
    '<span class="span">J\'ai été en charge du développement de plusieurs applications au sein du département Data et amélioration continue, notamment une application mobile destinées aux opérateurs des salles blanches</span>',
    "<span class=\"span\">Cela m'a donc permis d'approfondir mes connaissances en développement mobile et d'en apprendre plus sur le milieu de la Data</span>",
];
const tasGroup = document.querySelector("#tas");
function transitionTAS() {
    if (isMobile) {
        if (tasGroup.classList.contains("active")) {
            tasGroup.classList.remove("active");
        } else {
            tasGroup.classList.add("active");
        }
    } else {
        titleAndDesc.classList.add("transi");
        setTimeout(() => {
            document.querySelector(".etudiant-polytech").innerHTML =
                textForTAS[0];
            document.querySelector(".en-alternance-thales").innerHTML =
                textForTAS[1];
            document.querySelector(".passionn-d-aviation").innerHTML =
                textForTAS[2];
        }, 300);
        setTimeout(() => {
            titleAndDesc.classList.remove("transi");
        }, 700);
    }
}
