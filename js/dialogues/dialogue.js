
const buttonOpen = document.querySelector(".open-button-dial");
const buttonClose = document.querySelector(".close-button-dial");
const characterHero = document.querySelector(".hero");

const messageContainer = document.querySelector(".message-container");

const mapImageBackground = document.querySelector("#image-map");

const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');

const pnjOne = document.querySelector("#pnj-1");
const pnjTwo = document.querySelector("#pnj-2");
const objectOne = document.querySelector("#object-1");
const objectTwo = document.querySelector("#object-2");

function openFormDial() {
    characterHero.style.display = "none";
    document.getElementById("popupForm-dial").style.display = "block";
}

function closeFormDial() {
    document.getElementById("popupForm-dial").style.display = "none";
    characterHero.style.display = "flex";
    closeDialogueContainer();
}

function closeDialogueContainer() {
    messageContainer.style.display = "none";
    mapImageBackground.style.opacity = 1;
    pnjOne.style.opacity = 1;
    pnjTwo.style.opacity = 1;
    objectOne.style.opacity = 1;
    objectTwo.style.opacity = 1;


}


// Initial exchange
function initialText() {
    document.getElementById('textguide').textContent = "Salutation Humanoïde, Je suis le Guide. Bienvenue sur cette planète. Pour survivre ici tu vas devoir chercher les objets que tu as besoin pour repartir sur la Terre. Tu vas aussi devoir remporter des défis auprés des transhumains pour avoir certains objets." 
    document.getElementById('answer1').textContent = "'Y a t-il autre chose à savoir pour survivre ?'" //Changer notre réponse1.1
    document.getElementById('answer2').textContent = "'Quelle direction me conseillerais - tu ?'" //Changer notre réponse1.2
    button1.onclick = answer1;
    button2.onclick = answer2;
}


// ========== Answers ============ 

// First answer
function answer1() {

    document.getElementById('textguide').textContent = "'Pour survivre, il y a des arbres fruitiers et objets précieux sur notre planète essentiel pour avancer sans risque. En effet ta vie baissera sans cesse en chemin car l'air est impure'" // Changer le texte1 du guide
    document.getElementById('answer1').textContent = "'OK! Quels sont les objets disponible?'" //Changer notre réponse1.1
    document.getElementById('answer2').textContent = "'OK! Quelle direction me conseillerais - tu ?'" //Changer notre réponse1.2
    button1.onclick = answer1_1;
    button2.onclick = answer1_2;
}



// answer 1.1
function answer1_1() {
    document.getElementById('textguide').textContent = "'Tu dois récupérer certains artefacts chez les transhumains pour avancer. Tu devras aussi faire attention à bien trouver une source de nourriture non-contaminée, peut-être des arbres fruitiers épargnés sur ton chemin ?'"// Changer le texte1.1 du guide
}
// answer 1.2
function answer1_2() {
    document.getElementById('textguide').textContent = "'Je te conseillerai d'aller vers l'est !'"// Changer le texte1.2 du guide
}

// answer 2
function answer2() {
    document.getElementById('textguide').textContent = "'Il y aura un quizz pour savoir si tu mérite de traverser notre monde si fragile et pour le reste, à toi de le découvrir.'"// Changer le texte2 du guide
    document.getElementById('answer1').textContent = "'Qu'est ce que ces jeux m'apporteront?'"//Changer notre réponse2.1
    document.getElementById('answer2').textContent = "'D'accord. Il y aura un grand défi ?'"//Changer notre réponse2.2
    button1.onclick = answer2_1;
    button2.onclick = answer2_2;
}

// answer 2.1
function answer2_1() {
    document.getElementById('textguide').textContent = "'Ces jeux te permettront de voyager ou bien d'obtenir des objets pour sauver ton monde ou toi-même.'"// Changer le texte2.1 du guide
}

// answer 2.2
function answer2_2() {
    document.getElementById('textguide').textContent = "'Eh bien ce monde est pleins de dangers...'"// Changer le texte2.2 du guide
}

buttonOpen.addEventListener("click", openFormDial);
buttonOpen.addEventListener("click", initialText);
buttonClose.addEventListener("click", closeDialogueContainer);
