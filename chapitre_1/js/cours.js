// Accéder au DOM avec la variable document
// ****************************************

var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable contient l'objet body du DOM
console.log(b);	


// Découvrir le type d'un noeud
// ****************************
if(document.body.nodeType === document.ELEMENT_NODE) {
	console.log("Body est un noeud élément");
} else {
	console.log("Body est un noeud textuel");
}

// Accéder aux enfants d'un noeud élément
// **************************************
for(var i = 0; i < document.body.childNodes.length; i++) {
	if(document.body.childNodes[i].nodeType === document.ELEMENT_NODE) {
		console.log(document.body.childNodes[i]);
	}
}
console.log("***************************");


// Accéder au parent d'un noeud
// ****************************
var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent
