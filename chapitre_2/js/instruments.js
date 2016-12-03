/*
function infosLiens(){
	var donnees = []; // Création d'un tableau vide

	var liens = document.querySelectorAll("a"),
		totalLiens = liens.length,
		firstLien = liens[0],
		lastLien = liens[totalLiens -1];
	// var lastLien = totalLiens[];

	// Ajout dans le tableau
	donnees.push(totalLiens); // ajout de nombre total des liens
	donnees.push(firstLien); // ajout du premier lien
	donnees.push(lastLien); // ajout du dernier lien

	return donnees;
}
// La fonction renvoi un tableau | la lecture du tableau
for(var i = 0; i < infosLiens()[0]; i++) {
	console.log(infosLiens()[i]);
}

function possede(identifiants, clasNames){
	if(document.getElementById(identifiants) === null) {
		console.log("Aucun élément ne possède l'identifiant " + identifiants);
	} else {

		if(document.getElementById(identifiants).classList.contains(clasNames)) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
}
*/
// Corrections
// ***********

// Affiche des informations sur les liens
function infosLiens() {
	var liensElts = document.getElementsByTagName('a');
	nombreLiens = liensElts.length;
	console.log(nombreLiens);

	if(nombreLiens > 0) {
		console.log(liensElts[0].getAttribute("href")); // Affiche le premier element
		console.log(liensElts[nombreLiens -1].getAttribute("href")); // Affiche le premier element
	}
}
infosLiens();

// Affiche si un élément possède une classe
function possede(id, classe){
	var instrument = document.getElementById(id);
	if(instrument !== null) {
		console.log(instrument.classList.contains(classe));
	} else {
		console.log("Aucun élément ne possède l'identifiant " + id);
	}

}
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur