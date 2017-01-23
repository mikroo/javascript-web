// Fonction ajax

function ajaxGet(url, callback) {
	var req = new XMLHttpRequest();
	req.open('GET', url);

	req.addEventListener('load', function(){
		if(req.status >= 200 && req.status < 400) {
			// appelle la fonction callback
			callback(req.responseText);
		} else {
			console.error("Erreur " + req.statusText);
		}
	});

	req.addEventListener('error', function(){
		console.error("Erreur server : " + url);
	});

	req.send(null);
}

var url = "http://localhost/javascript-web-srv/data/films.json";
ajaxGet(url, function(reponse){
	var listTab = JSON.parse(reponse);

	// afficher et lister
	console.log(listTab[0]);
	
	var tableElt = document.createElement('table');
	var theadElt = document.createElement('tr');
	
	var nom = document.createElement('th');
	nom.textContent = 'Nom';

	var annee = document.createElement('th');
	annee.textContent = 'année';

	var auteur = document.createElement('th');
	auteur.textContent = 'Auteur';



	theadElt.appendChild(nom);
	theadElt.appendChild(annee);
	theadElt.appendChild(auteur);

	tableElt.appendChild(theadElt);
	listTab.forEach(function(tab){
		var trElt = document.createElement('tr');

		// les ligne du tableau
		var titreElt = document.createElement('td');
		titreElt.textContent = tab.titre;
		var anneeElt = document.createElement('td');
		anneeElt.textContent = tab.annee;
		var realisateurElt = document.createElement('td');
		realisateurElt.textContent = tab.realisateur;

		trElt.appendChild(titreElt);
		trElt.appendChild(anneeElt);
		trElt.appendChild(realisateurElt);

		tableElt.appendChild(trElt);

		// Afficher dans le dom
		document.querySelector('#contenu').appendChild(tableElt);

	});
})

