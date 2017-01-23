// Fonction ajax
function ajaxGet(url, callback) {
	var req = new XMLHttpRequest();
	req.open("GET", url);
	req.addEventListener('load', function(){
		if(req.status >= 200 && req.status < 400) {
			// appelle la fonction callback en lui passant la réponse de la requête
			callback(req.responseText);
		} else {
			console.error(req.status + " " + req.statusText + " " + url);
		}
	});

	req.addEventListener('error', function(){
		console.error("Erreur réseau avec l'URL " + url);
	});
	req.send(null);
}	

// Alphabet
var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
var containerElt = document.querySelector('#container');
var lexiqueElt = document.createElement('div');
	
alphabets.forEach(function(alphabet){
	var elt = document.createElement('a');
	elt.textContent = alphabet;
	elt.href = '#';
	// Style CSS
	elt.style.borderRight = '1px solid grey';
	elt.style.paddingRight = '5px';
	elt.style.paddingLeft = '5px';

	containerElt.appendChild(elt);

	elt.addEventListener('click', function(){
		// CODE SOURCE
		var lettre = elt.textContent;
		var url = "https://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre.toUpperCase();
		console.log(url);
		// Requette ajax
		ajaxGet(url, function(reponse){
			var result = JSON.parse(reponse);
			// boucle pour affficher la liste des objet
			lexiqueElt.innerHTML = '';
			for(var i = 0; i < result.length; i++){

				var termElt = document.createElement('h3');
				termElt.textContent = result[i].term;
				var definitionElt = document.createElement('p');
				definitionElt.textContent = result[i].definition;

				// Ajouter dans le dom
				lexiqueElt.appendChild(termElt);
				lexiqueElt.appendChild(definitionElt);
			}

			if(!lexiqueElt.hasChildNodes()) {
				lexiqueElt.textContent = "Aucun mot trouvé";
			}



		});
		containerElt.appendChild(lexiqueElt);

	});
});