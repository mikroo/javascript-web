// https://oc-jswebsrv.herokuapp.com/article
var formElt = document.querySelector('form');
formElt.addEventListener('submit', function(e){
	e.preventDefault();
	var article = new FormData(formElt);
	ajaxPost("http://oc-jswebsrv.herokuapp.com/articles", article, function(reponse){
		// afficher un message au client 
		var messageElt = document.createElement('p');
		message.textContent = " L'article a bien été ajouté";
		document.getElementById("resultat").appendChild(messageElt);

		// console.log("L'article " + JSON.stringify(article) + " a été envoyé au serveur");
	}, true );

});














	/*
	var article = {
		titre: formElt.elements.titre.value,
		contenu: formElt.elements.contenu.value
	}
	*/