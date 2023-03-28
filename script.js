/* Constante : selection de l'élèment qui contient tout */
const contenu = document.querySelector(".contenu");

/* Variable : nombre de cases créés */
let nombreCasesCrées = 0;

/* Création d'une case de base */
const carre = document.createElement("div");
carre.classList.add("carre");

/* Fonction pour générer une couleur aléatoire */
function genererCouleurAleatoire(){
    let rouge = Math.floor(Math.random() * 256);
    let vert = Math.floor(Math.random() * 256);
    let bleu = Math.floor(Math.random() * 256);
    let rgb = [rouge, vert, bleu];
    return rgb;
}

/* Création de cases */
document.addEventListener("keyup", function(e){
    if(e.code === "ArrowDown" && nombreCasesCrées < 225){
        let nouvCarre = carre.cloneNode();
        let couleurs = genererCouleurAleatoire();
        nouvCarre.style.backgroundColor = "rgb(" + couleurs[0] + ", " + couleurs[1] + ", " + couleurs[2] + ")";
        contenu.appendChild(nouvCarre);
        nombreCasesCrées++;
    }
    else if(e.code === "ArrowUp" && nombreCasesCrées > 0){
        contenu.removeChild(contenu.lastElementChild);
        nombreCasesCrées--;
    }
})