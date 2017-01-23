/*
// code ecrit en synchrone
// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET sychrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);
*/
/*
// code ecrit en asynchrone
var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absen
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'évenement indiquant la fin de la requête
req.addEventListener('load', function(){
	// Affiche la réponse reçue pour la requête
	console.log(req.responseText);
});
req.send(null);
*/
/*
// Gestion des erreurs
var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
req.addEventListener('load', function(){
	if(req.status >= 200 && req.status < 400) {
		console.log(req.responseText);
	} else {
		// Affichage des informations sur l'échec du traitement de la requête
		console.error(req.status + " " + req.statusText);
	}
});
req.addEventListener('error', function(){
	// La requête n'a pas réussi à atteindre le serveur
	console.error("Erreur réseau");
});
req.send(null);
*/
/*
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}
*/
/*
function afficher(reponse) {
	console.log(reponse);
}
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function(reponse){
	console.log(reponse);
});
*/

// Gestion du format JSON par JavaScript
/*
var avion = {
	marque: "Airbut",
	couleur: "A320"
};
console.log(avion);
// Transforme l'objet Javascript en chaine de caractères JSON
var textAvion = JSON.stringify(avion);
console.log(textAvion);
// Transforme la chaine de caractères JSON ne objet Javascript
console.log(JSON.parse(textAvion));
*/
/*
var avions = [
	{
		marque: "Airbus",
		couleur: "A320"
	},
	{
		marque: "Airbus",
		couleur: "A380"
	}
];

console.log(avions);
// Transforme le tableau d'objets JS en chaine de caractère JSON
var textAvions = JSON.stringify(avions);
console.log(textAvions);
// Transforme la chaine de caractère JSON en tableaux d'objets
console.log(JSON.parse(textAvions));
*/

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function(reponse){
	// Transforme la réponse en tableau d'objets Javascript
	var films = JSON.parse(reponse);
	// Affiche le titre de chaque film
	films.forEach(function(film){
		console.log(film.titre);
	})
});