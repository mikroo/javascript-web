// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"


for(var i = 0; i < journaux.length; i++){
	var aElt = document.createElement('a'); // création element
	var brElt = document.createElement('br'); // création element
	aElt.href = journaux[i]; // Création des liens
	aElt.textContent = journaux[i]; // Création contenu textuel
	
	aElt.appendChild(brElt);
	document.getElementById('contenu').appendChild(aElt); // Insertion 

}