/* 
Activité 1
Author : mikroo
url : mikroo.com
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
/* Inclure une page externe */

/*
var Films = {
  init: function (titre, annee, realisateur) {
    this.titre = titre;
    this.annee = annee;
    this.realisateur = realisateur;
  },
  decrire: function(){
    var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
    return description;
  }

}
var film1 = Object.create(Films);
film1.init("Le loup de wall Stree", 2013, "Martin Scorsese");
*/



// creer un formulaire avec l'objet form


var ajoutLien = document.getElementById('ajoutLien');
ajoutLien.addEventListener('click', function(){
  document.getElementById('formulaire').innerHTML = '';
  // Début du formulaire
  // creer un formularie
  // creer le formulaire avec l'objet
  var formElt = Form.createFormElt('form');
  var nomElt = Form.createFormElt('input', 'Ton prénom'); 
  var titreElt = Form.createFormElt('input', 'Titre du lien'); 
  var lienElt = Form.createFormElt('input', 'url'); 
  var sendElt = Form.createFormElt('button','Envoyer');

  var tabElts = [nomElt, titreElt, lienElt, sendElt];

  Form.createForm(formElt,tabElts,'formulaire');
});

/*
//  Création du formulaire 
ajoutLien.addEventListener('click', function(){
  // supprime le bouton ajouter un lien
  document.getElementById('formulaire').innerHTML = '';

  var formElt = document.createElement('form');
  var nomElt = document.createElement('input');
      nomElt.placeholder = "Entrez votre nom";
  var titreElt = document.createElement('input');
      titreElt.placeholder = "Entrez le titre du lien";
  var lienElt = document.createElement('input');
      lienElt.placeholder = "Entrez l'URL du lien";
      lienElt.required = 'required';
  var buttonElt = document.createElement('button');
      buttonElt.textContent = "Ajouter";
      buttonElt.type = "submit";


  // Ajout du formulaire à la page
  formElt.appendChild(nomElt);
  formElt.appendChild(titreElt);
  formElt.appendChild(lienElt);
  formElt.appendChild(buttonElt);
  document.getElementById('formulaire').appendChild(formElt);
});

*/


/* Gerer le formulaire qui va ajouter un lien */
/*
listeLiens.forEach(function(lien){
  console.log(lien.url);
})

console.log('----------------------------');
var autreLien = {'titre': 'mikroo inc', 'url' :'http://mikroo.com', 'auteur':'Chancy'};
listeLiens.push(autreLien);

listeLiens.forEach(function(lien){
  console.log(lien);
})
// Ajouter une entrer dans un tableau
*/