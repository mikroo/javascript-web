var ListeLiens = {
  init: function(titre, url, auteur) {
    this.titre = titre;
    this.url = url;
    this.auteur = auteur;
  },
  decrire: function(tab) {
	  tab.forEach(function(lien){
	    var articleElt = document.createElement('article');
	    articleElt.className = 'lien';

	    // Titre
	    var h4Elt = document.createElement('h4');
	    h4Elt.style.display = 'inline';
	    var aElt = document.createElement('a');
	        aElt.href = lien.url;
	        aElt.textContent = lien.titre;
	        aElt.style.textDecoration = 'none';
	        aElt.style.color = '#428bca';
	    h4Elt.appendChild(aElt);
	    articleElt.appendChild(h4Elt);

	   // Url
	   var spanElt = document.createElement('span');
	   spanElt.textContent = ' ' + lien.url;
	   articleElt.appendChild(spanElt);

	   // Auteur
	   var auteurSpanElt = document.createElement('span');
	   auteurSpanElt.style.display = 'block';
	   auteurSpanElt.textContent = 'Ajouté par ' + lien.auteur; 
	   
	   articleElt.appendChild(auteurSpanElt);

	   document.getElementById('contenu').appendChild(articleElt);

	  });
	}
};


