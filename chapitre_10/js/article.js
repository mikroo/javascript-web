// https://oc-jswebsrv.herokuapp.com/article
var formElt = document.querySelector('form');

formElt.addEventListener('submit', function(e){
	e.preventDefault();

	var article = {
		titre: formElt.elements.titre.value,
		contenu: formElt.elements.contenu.value
	}

	// Envoi de l'objet au serveur
	ajaxPost("https://oc-jswebsrv.herokuapp.com/articles", article, function(){
		// afficher un message au client 
		console.log("L'article " + JSON.stringify(article) + " a été envoyé au serveur");
	}, true );

});