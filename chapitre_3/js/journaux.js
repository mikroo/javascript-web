// Liste des journaux
/*
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
var h1Elt = document.createElement('h1');
h1Elt.textContent = "Quelques journaux en ligne";
document.getElementById("contenu").appendChild(h1Elt);

for(var i = 0; i < journaux.length; i++){
	var aElt = document.createElement('a'); // création element
	var brElt = document.createElement('br'); // création element
	aElt.href = journaux[i]; // Création des liens
	aElt.textContent = journaux[i]; // Création contenu textuel
	
	aElt.appendChild(brElt);
	document.getElementById('contenu').appendChild(aElt); // Insertion 
}
*/
/* CORRECTION */
// Liste es journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
for ( var i = 0; i < journaux.length; i++) {
	var lienElt = document.createElement('a');
	lienElt.textContent = journaux[i];
	lienElt.href = journaux[i];
	// Ajoute un lien
	document.getElementById('contenu').appendChild(lienElt);
	// Ajoute une balise <br>
	document.getElementById('contenu').appendChild(document.createElement('br'));
}



