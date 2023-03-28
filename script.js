/* Constante : selection de l'élèment qui contient tout */
const contenu = document.querySelector(".contenu");

/* Variable : nombre de cases créés */
let nombreCasesCrées = 0;

/* Création d'une case de base */
const carre = document.createElement("div");
carre.classList.add("carre");

/* Création de cases */
for(i = 0; i < 225; i++){
    let nouvCarre = carre.cloneNode();
    contenu.appendChild(nouvCarre);
}