// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [];
listeLiens = [
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

var ListeLien = {
  init: function(titre, url, auteur) {
    this.titre = titre;
    this.url = url;
    this.auteur = auteur;
  },
  decrire: function(){
    var description = this.auteur + ' a ajouter ' + this.titre + ' |' + this.url;
    return description;
  }
};

// var newLink = Object.create(ListeLien);
// newLink.init('gitHub','http://github.com','chancy');





// ----------------------------------
// Gerer formulaire
function gererForm(){
  var listeLiens = [];
  var nom = formElt.elements.nom.value;
  var titre = formElt.elements.titre.value;
  var lien = formElt.elements.lien.value;

  var newLink = Object.create(ListeLien);
  newLink.init(titre, lien, nom);
  listeLiens.unshift(newLink);

  // il doit afficher un seul entrer
  listeLiens.forEach(function(lien){
    console.log(lien);
  });
}
// Evenement 
var formElt = document.querySelector('form');
formElt.addEventListener('submit', function(e){
  gererForm();
  e.preventDefault();
  
})
// ------------------------------
// il doit tout afficher
listeLiens.forEach(function(lien){
    console.log(lien);
  });