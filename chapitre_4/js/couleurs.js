// Modification des couleurs
var couleurText = prompt('Entrez la couleur du texte : ');
var couleurFond = prompt('Entrez la couleur du fond');

var divElt = document.querySelectorAll('div');
for(var i = 0; i < divElt.length; i++){
	divElt[i].style.color = couleurText; // Text
	divElt[i].style.backgroundColor = couleurFond; // Fond
}
