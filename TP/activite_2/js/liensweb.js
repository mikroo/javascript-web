/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
/* Gerer le formulaire */
var ajoutLien = document.getElementById('ajoutLien');
ajoutLien.addEventListener('click', function(){
  // Enlever le bouton ajouter un lien
  document.getElementById('formulaire').innerHTML = '';

  // Créer le formulaire
  var formElt = document.createElement('form');
  var nomElt = document.createElement('input');
      nomElt.placeholder = "Entrez votre nom";
  var titreElt = document.createElement('input');
      titreElt.placeholder = "Entrez le titre du lien";
  var lienElt = document.createElement('input');
      lienElt.placeholder = "Entrez l'URL du lien";
  var buttonElt = document.createElement('button');
      buttonElt.textContent = "Ajouter";

  formElt.appendChild(nomElt);
  formElt.appendChild(titreElt);
  formElt.appendChild(lienElt);
  formElt.appendChild(buttonElt);
  document.getElementById('formulaire').appendChild(formElt);
});


for(var i = 0; i < listeLiens.length; i++) {
    var articleElt = document.createElement('article');
    articleElt.className = 'lien';

    // Titre
    var h4Elt = document.createElement('h4');
    h4Elt.style.display = 'inline';
    var aElt = document.createElement('a');
        aElt.href = listeLiens[i].url;
        aElt.textContent = listeLiens[i].titre;
        aElt.style.textDecoration = 'none';
        aElt.style.color = '#428bca';
    h4Elt.appendChild(aElt);
    articleElt.appendChild(h4Elt);

   // Url
   var spanElt = document.createElement('span');
   spanElt.textContent = ' ' + listeLiens[i].url;
   articleElt.appendChild(spanElt);

   // Auteur
   var auteurSpanElt = document.createElement('span');
   auteurSpanElt.style.display = 'block';
   auteurSpanElt.textContent = 'Ajouté par ' + listeLiens[i].auteur; 
   
   articleElt.appendChild(auteurSpanElt);

   document.getElementById('contenu').appendChild(articleElt);
}
