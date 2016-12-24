function desserts() {
	dessert = prompt('Entrez le nom du nouveau dessert : '); // Affiche une boite de dialogue

	var desserts = document.createElement('li'); // creer un element
	desserts.textContent = dessert;
	document.getElementById('desserts').appendChild(desserts); // Ajout de l'élément
}

var buttonElt = document.querySelector('button'); // recupérer le bouton
buttonElt.addEventListener('click', desserts); // Gestion de l'evenement