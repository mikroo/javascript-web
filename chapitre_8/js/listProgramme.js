// Ajax

function getAjax(url, callback){

	var req = new XMLHttpRequest();
	req.open("GET", url);
	req.addEventListener('load', function(){
		if(req.status >= 200 && req.status < 400 ) {
			callback(req.responseText);
		} else {
			console.log("Erreur réseau " + req.statusText);
		}
	});

	req.addEventListener('error', function(){
		console.log("Erreur réseau " + url);
	});
	req.send(null);
}


var url = "http://localhost/javascript-web-srv/data/langages.txt";
getAjax(url, function(reponse){
	// Exécution du code
	var langagesInfo = reponse.split(';');

	// Afficher dans le DOM
	var conteneur = document.querySelector('#contenu');
	// créer l'élément ul
	var ulElt = document.createElement('ul');
	for(var i = 0; i < langagesInfo.length; i++){
		var liElt = document.createElement('li');
		liElt.textContent = langagesInfo[i];
		ulElt.appendChild(liElt);
		conteneur.appendChild(ulElt); // Ajout dans le dom et afficher
	}
	console.log(langagesInfo);
});
