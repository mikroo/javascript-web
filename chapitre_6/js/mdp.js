// Les deux mots de passe saisis doivent être identiques.
// Leur longueur doit être au minimum de 6 caractères.
// Ils doivent contenir au moins un chiffre.

// 1. recuperer le formulaire
var formElt = document.querySelector('form');
// console.log(formElt.elements.mdp1.value);
formElt.addEventListener('submit', function(e){
	var regex = /[a-z][0-9]/;
	var mdp1Elt = formElt.elements.mdp1.value;
	var mdp2Elt = formElt.elements.mdp2.value;
	var infoMdp = document.getElementById('infoMdp');
	

	if(mdp1Elt === mdp2Elt) { // Les deux mots de passe saisis doivent être identiques.
		if(mdp1Elt.length >= 6) { // Leur longueur doit être au minimum de 6 caractères.
			if(regex.test(mdp1Elt)) { // Ils doivent contenir au moins un chiffre.
				infoMdp.textContent = "Mots de passe OK";
				console.log('Mots de passe OK'); 
			} else {
				infoMdp.textContent = "erreur :  le mot de passe ne contient aucun chiffre";
				console.log("erreur :  le mot de passe ne contient aucun chiffre");
			}
		} else {
			infoMdp.textContent = "Erreur : la longueur minimale du mot de passe est de 6 caractères";
			console.log("Erreur : la longueur minimale du mot de passe est de 6 caractères");
		}
	} else {
		infoMdp.textContent = "Erreur : les mots de passe saisis sont différents";
		console.log("Erreur : les mots de passe saisis sont différents");
	}

	e.preventDefault();
});
