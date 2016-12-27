<<<<<<< HEAD
function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);
=======
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
/*
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
	console.log("Evènement souris : " + e.type + ", bouon " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener('click', infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener('mouseup', infosSouris);

// Fin du chargement de la page web

// Gestion de la fin du chargmenet de la page web
window.addEventListener('load', function() {
	console.log("Page entièrement chargée");
});


// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function(e) {
	var message = "On est bien ici !";
	e.returnValue = message // Provoque une demande de confirmation (standard)
	return message; // Provoque une demande de confirmation (certains navigateurs)
});
*/
// Gestion du clic sur le document
document.addEventListener('click', function() {
	console.log("Gestionnaire document");
});

// Gestion du clic sur le paragraphe
document.getElementById('para').addEventListener('click', function(){
	console.log("Gestionnaire paragraphe");
});

// Gestion du clic sur le bouton
document.getElementById('propa').addEventListener('click', function(e){
	console.log("Gestionnaire bouton");
})


// Gestion du clic sur le bouton
document.getElementById('propa').addEventListener('click', function(e) {
	console.log("Gestionnaire bouton");
	e.stopPropagation(); // Arrêt de la propagation de l'événenement
});

// Modifier le comportement par défaut en cas d'événement
document.getElementById("interdit").addEventListener('click', function(e){
	console.log("Contunuez plutôt à lire le cours ;)");
	e.preventDefault(); // Annulation de la navigation vers la cible du lien
});

>>>>>>> af63e93351605f43b49619a6a58dcc20cc272f48
