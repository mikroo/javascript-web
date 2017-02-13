// LISTE DES FONCTIONS

// Créer le bouton ajouter un formulaire
var addLinkContainerElt = document.createElement('div');
addLinkContainerElt.style.paddingBottom = "20px";
var addLinkElt = document.createElement('button');
addLinkElt.style.padding = "5px";
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
  nomElt.required = "required";
  nomElt.placeholder = "Entrez votre nom";

  var titreElt = document.createElement('input');
  titreElt.required = "required";
  titreElt.placeholder = "Entrez le titre du lien";

  var urlElt = document.createElement('input');
  urlElt.required = "required";
  urlElt.placeholder = "Entrez l'URL du lien";

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

  // Traitement du formulaire
  formElt.addEventListener('submit', function(e){
    e.preventDefault();
    // Ajouter dans l'adresse API

  // Ajouter les http au lien entrer par l'utilisateur
  var regex = /^https?:\/\/[a-z]+\.[a-z]{2,6}/;
  var lien = urlElt.value;
  if(!regex.test(lien)){
    lien = 'http://' + lien;  
  }

  var lien = {
    "url": lien,
    "titre": titreElt.value,
    "auteur": nomElt.value
  };

  var url = "https://oc-jswebsrv.herokuapp.com/api/lien";
  ajaxPost(url, lien, function(){ // Si tout est OK, on affiche le lien dans la page
    var elementLien = creerElementLien(lien);
    containerElt.insertBefore(elementLien, containerElt.firstChild);

    showMsg(nomElt.value);
    console.log("Le nouveau lien est ajouté" + JSON.stringify(lien));
  },
  true // Valeur du paramètre isJson
  );
    // vider le conteneur du formulaire
    addLinkContainerElt.innerHTML = "";
    addLinkContainerElt.appendChild(addLinkElt); // Afficher de nouveau le formulaire
  });
});

// 1. recuperer les donnees de la base de données
var url = "https://oc-jswebsrv.herokuapp.com/api/liens";
ajaxGet(url, function(reponse){
  var listeLiens = JSON.parse(reponse);
  // Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
  listeLiens.forEach(function (lien) {
      var elementLien = creerElementLien(lien);
      containerElt.appendChild(elementLien);
  });
});