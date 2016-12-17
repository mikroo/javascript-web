/*
function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);
// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById('bouton').addEventListener('click', function(e){
	console.log("Evènement : " + e.type + ", text de la cible : " + e.target.textContent);
});

*/

// Appui sur une touche du clavier

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener('keypress', function(e){
	console.log("Vous avez appuyé sur la touch " + String.fromCharCode(e.charCode));
});



// Gérer l'apui et le relâchement sur n'importe quelle touche du clavier
function infosClavier(e) {
	console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}

// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", infosClavier);
document.addEventListener('keyup', infosClavier);

// Clic sur un bouton de la souris

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
	switch (code) {
	case 0: // 0 est le code du bouton gauche
		bouton = "gauche";
		break;
	case 1: // 1 est le code du bouton du milieu
		bouton = 'milieu';
		break;
	case 2: // 2 est le code du bouon droit
		bouon = 'droit';
		break;
	}

	return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
	console.log("Evènement souris : " + e.type + ", bouon " + getBoutonSouris(e.button))
}
