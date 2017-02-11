// LISTE DES FONCTIONS
// styles css des elements
function styleForm(elt){
    elt.style.border = "1px solid grey";
    elt.style.padding = "5px";
    elt.style.marginRight = "5px";
  }

// 1. recuperer les donnees de la base de données
var url = " https://oc-jswebsrv.herokuapp.com/api/liens";
ajaxGet(url, function(reponse){
  var results = JSON.parse(reponse);

  results.forEach(function(result){
    console.log(result.titre);
  });
});

// Créer le bouton ajouter un formulaire
var addLinkContainerElt = document.createElement('div');
var addLinkElt = document.createElement('button');
addLinkElt.textContent = "Ajouter un lien";
addLinkContainerElt.appendChild(addLinkElt);

// recuperer le conteneur
var containerElt = document.querySelector('#contenu');

// inserer le bouton ajouter un lien, avant le div container
document.querySelector('body').insertBefore(addLinkContainerElt, containerElt);

// Créer le formulaire quand on click sur le bouton ajouter un lien
addLinkElt.addEventListener('click', function(){
  addLinkContainerElt.innerHTML = ""; // Vider addLinkContainer
  // Créer le formulaire
  var formElt = document.createElement('form');
  var nomElt = document.createElement('input');
  var titreElt = document.createElement('input');
  var urlElt = document.createElement('input');
  var sendElt = document.createElement('input');
  sendElt.type = "submit";
  sendElt.value = "Ajouter";

  formElt.appendChild(nomElt);
  formElt.appendChild(titreElt);
  formElt.appendChild(urlElt);
  formElt.appendChild(sendElt);

  // Style formulaire
  styleForm(nomElt);
  styleForm(titreElt);
  styleForm(urlElt);
  styleForm(sendElt);

  // Ajouter le formulaire dans addLinkContainer
  addLinkContainerElt.appendChild(formElt);


  // 
});