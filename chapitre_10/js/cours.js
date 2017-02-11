// Exécute un appel AJAX POST
// Prend en paramètre l'URL cible, la donné à envoyer et la fonctin callback applée en cas de succès
function ajaxPost(url, data, callback, isJson) {
	var req = new XMLHttpRequest();
	req.open("POST", url);
	req.addEventListener("load", function() {
		if(req.status >= 200 && req.status < 400) {
			// Appelle la fonction callback en lui passant la réponse de la requête
			callback(req.responseText);
		} else {
			console.error(req.status + " " + req.statusText + " " + url);
		}
	});
	req.addEventListener("error", function(){
		console.error("Erreur réseau avec l'url " + url);
	});
	if(isJson) {
		// Définit le contenu de la requête comme étant du JSON
		req.setRequestHeader("Content-Type", "application/json");
		// Transforme la donnée du form JSON vers le format text avant l'envoi
		data = JSON.stringify(data);
	}
	req.send(data);
}
/*
var commande = new FormData();
commande.append('couleur', 'rouge');
commande.append('pointure', '44');
//Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php",commande, function(reponse){
	// Affichage dans la console en cas de succès
	console.log("Commande envoyée au serveur");
});
*/

/*
// Geérer la soumission d'un formulaire avec FormData
var form = document.querySelector('form');
// Gestion de la soumission du formulaire
form.addEventListener('submit', function(e){
	e.preventDefault();
	// Récupération des champs du formulaire dans l'objet FormData
	var data = new FormData(form);
	ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function(){
		console.log("Elements envoyer");
	});
});
*/
/*
var film = {
	titre: "Zootopie",
	annee: "2016",
	realisateur: "Byron Howard et Rich Moore"
};

// Evoi de l'objet au serveur
var url = "http://localhost/javascript-web-srv/post_json.php";
ajaxPost(url, film, function(){
	// Le film est affiché dans la console en cas de succès
	console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
},
true // Valeur du paramètre isJson
);
*/


var newLink = {
	"titre" : "monTitre",
	"url" : "URL monUrl",
	"auteur" : "auteur du lien 243"
}
// Envoyer dans le serveur
var url = "https://oc-jswebsrv.herokuapp.com/api/lien";
ajaxPost(url, newLink, function(){
	console.log("Le nouveau lien est ajouté" + JSON.stringify(newLink));
},
true // Valeur du paramètre isJson
);
