/* Constante : selection de l'élèment qui contient tout */
const contenu = document.querySelector(".contenu");

/* Variable : nombre de cases créés */
let nombreCasesCrées = 0;

/* Création d'une case de base */
const carre = document.createElement("div");
carre.classList.add("carre");

/* Création de cases */
document.addEventListener("keyup", function(e){
    if(e.code === "ArrowDown" && nombreCasesCrées < 225){
        let nouvCarre = carre.cloneNode();
        contenu.appendChild(nouvCarre);
        nombreCasesCrées++;
    }
    else if(e.code === "ArrowUp" && nombreCasesCrées > 0){
        contenu.removeChild(contenu.lastElementChild);
        nombreCasesCrées--;
    }
})