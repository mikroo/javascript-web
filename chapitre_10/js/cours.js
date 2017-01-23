/*
// Création d'un objet FormData
var commande = new FormData();
// Ajout d'information dans l'objet
commande.append('couleur','rouge');
commande.append("pointure", "43");
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande, function(reponse){
	// Affichage dans la console en cas de succès
	console.log("Commande envoyée au serveur");
});
*/




/*
 *	GERER LA SOUMISSION D'UN FORMULAIRE AVEC FORMDATA
 var form = document.querySelector('form');
 // Gestion de la soumission du formulaire
 form.addEventListener('submit', function(e){
 	e.preventDefault();
 	// Récupération des champs du formulaire dans l'objet FormData
 	var data = new FormData(form);
 	// Envoi des données du formulaire au serveur
 	// La fonction callback est ici vide
 	ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {});
 });

 */

/*
 *	ENVOYEZ DES DONNEES JSON
 */



// Création d'un objet représentant un film
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);