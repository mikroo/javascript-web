/*
var compteurElt = document.getElementById("compteur");

// Deiminue le compteur jusqu'à 0
function diminuerCompteur(){
	// Conversion en nombre du texte du compteur
	var compteur = Number(compteurElt.textContent);
	compteurElt.textContent = compteur - 1;
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
setInterval(diminuerCompteur, 1000);
*/

/*
// Démarrer une action répétée
var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
	var compteur = Number(compteurElt.textContent);
	if(compteur > 1) {
		compteurElt.textContent = compteur - 1;
	} else {
		// Annule l'éxécution répétée
		clearInterval(intervalId);
		// Modifie le titre de la page
		var titre = document.getElementById('titre');
		titre.textContent = "BOUM !!!";
	}
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);
*/
/*
// Démarrer une action répétée
var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
	var compteur = Number(compteurElt.textContent);
	if(compteur > 1) {
		compteurElt.textContent = compteur - 1;
	} else {
		// Annule l'éxécution répétée
		clearInterval(intervalId);
		// Modifie le titre de la page
		var titre = document.getElementById('titre');
		titre.textContent = "BOUM !!!";
		// Modification du titre au bout de 2 secondes
		setTimeout(function () {
			titre.textContent = "Tout est cassé :(";
		}, 2000);
	}
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);
*/

/*
// ANIMATION 
var cadre = document.getElementById('cadre');
var bloc = document.getElementById('bloc');

// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var diametreBloc = parseFloat(getComputedStyle(bloc).width);
var vitesse = 7; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {
	// Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
	var xBloc = parseFloat(getComputedStyle(bloc).left);
	// Déplacement du bloc
	bloc.style.left = (xBloc + vitesse) + "px";
	// Demande au navigateur d'appeler deplacerBloc dès que possible
	requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation
*/

// Débuter une animation
var cadre = document.getElementById('cadre');
var bloc = document.getElementById('bloc');
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
	// Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
	var xBloc = parseFloat(getComputedStyle(bloc).left);
	// Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
	var xMax = parseFloat(getComputedStyle(cadre).width);
	if(xBloc + largeurBloc <= xMax) { // Si le bloc n'est pas encore au bout du cadre
		// Déplacement du bloc
		bloc.style.left = (xBloc + vitesse) + "px";
		// Demande au naigateur d'appeler deplacerBloc dès que possible
		animationId = requestAnimationFrame(deplacerBloc);
	} else {
		// Annulation de l'animation
		cancelAnimationFrame(animationId);
	}
}
requestAnimationFrame(deplacerBloc); // Début de l'animation
