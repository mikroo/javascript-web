// Liste des desserts

// recuperer le bouton
var buttonElt = document.getElementsByTagName('button');
buttonElt[0].addEventListener('click',function(){
	var dessert = prompt('Entre votre dessert'); // le nom entrer par le User

	var liElt = document.createElement('li'); // creer un élément li
	liElt.textContent = dessert; // ajout du nom de dessert dans l'élément li

	// Modification de l'élément ajouter recement
	liElt.addEventListener('click', function(e){
		var newDessert = prompt('Modifier le nom de votre desser', e.target.textContent);
		liElt.textContent = newDessert; // application des nouveau modification
	});
	// ajout l'élément liElt dans l'élément ul existant
	document.getElementById('desserts').appendChild(liElt);
});
