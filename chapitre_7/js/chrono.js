var button = document.querySelector('button');
var secondes = document.getElementById('compteur');
var demarre = false;

function compteur(){
	secondes.textContent = Number(secondes.textContent) + 1;
}

button.addEventListener('click', function(){
	if(!demarre) {
		button.textContent = 'Arrêter';
		compteurId = setInterval(compteur, 1000);
	} else {
		button.textContent = 'Démarrer';
		clearInterval(compteurId);
	}

	demarre = !demarre;
});




















/*
var bouton = document.querySelector("button");
var compteurElt = document.getElementById("compteur");
var intervalId = null;
var demarre = false; 

function augmenterCompteur() {
    compteurElt.textContent = Number(compteurElt.textContent) + 1;
}

bouton.addEventListener("click", function () {
    if (!demarre) {
        // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
        intervalId = setInterval(augmenterCompteur, 1000);
        bouton.textContent = "Arrêter"; // Modifie le texte du bouton
    } else {
        clearInterval(intervalId); // Arrête le chronomètre
        bouton.textContent = "Démarrer"; // Modifie le texte du bouton
    }
    // Inverse la valeur de l'état du chronomètre
    demarre = !demarre;
});
*/