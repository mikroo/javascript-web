function ajaxGet(url, callback) {
	var req = new XMLHttpRequest();
	req.open("GET", url);
	req.addEventListener('load', function(){
		if (req.status >= 200 && req.status < 400) {
			// appelle la fonction callback en lui passant la réponse de la requête
			callback(req.responseText);
		} else {
			console.error(req.status + " " + req.statusText + " " + url);
		}
	});

	req.addEventListener('error', function () {
		console.error("Erreur réseau avec l'URL " + url);
	});
	req.send(null);
}

// donner de connexion
var client_secret = "89547624e8c1f08aac89e9d7addd33534137bb7d";
var client_id = "5fb704074f35067e7aee";

// Traiter le formulaire des données
var formElt = document.querySelector('form');
var usernameElt = document.querySelector("#username");

formElt.addEventListener('submit', function(e){
	var username = formElt.elements[0].value;

	// Traiter l'API
	var url = 'https://api.github.com/users/' + username + '?client_id='+ client_id +'&client_secret='+client_secret; 
	ajaxGet(url, function(reponse){
		// Transform la réponse en tableau d'objets Javascript
		var profils = JSON.parse(reponse); // il va le convertir en objet

		// Recupere le container profil
		var profilContainer = document.querySelector('#profil');
		// vider le conteneur 
		profilContainer.innerHTML = '';

		// Photo
		var lienPhoto = profils.avatar_url;

		// creer une image
		var imgElt = document.createElement('img');
		imgElt.src = profils.avatar_url;
		// nom utilisateur github
		var nameElt = document.createElement('h3');
		nameElt.textContent = profils.name;
		// site utilisateur github
		var urlElt = document.createElement('a');
		urlElt.href = profils.blog;
		urlElt.textContent = profils.blog;

		// Ajout dans le profilContainer
		profilContainer.appendChild(imgElt);
		profilContainer.appendChild(nameElt);
		profilContainer.appendChild(urlElt);

		// vider le input 
		formElt.elements[0].value = '';

	});

	e.preventDefault();
});

