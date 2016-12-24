/* Ajout d'un dessert */ /*
function desserts() {
	dessert = prompt('Entrez le nom du nouveau dessert : '); // Affiche une boite de dialogue

	var desserts = document.createElement('li'); // creer un element
	desserts.textContent = dessert;
	document.getElementById('desserts').appendChild(desserts); // Ajout de l'élément
}

var buttonElt = document.querySelector('button'); // recupérer le bouton
buttonElt.addEventListener('click', desserts); // Gestion de l'evenement
*/

// Correction
document.querySelector('button').addEventListener('click', function (){
	var nomDessert = prompt("Entrez le nom du nouveau dessert :");

	var dessertElt = document.createElement('li');
	dessertElt.textContent = nomDessert;
	dessertElt.addEventListener('click', function(e) {
		var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
		e.target.textContent = nouveauNom;
	});

	document.getElementById("desserts").appendChild(dessertElt);

});