// LISTE DES FONCTIONS
// styles css des elements
function styleForm(elt){
    elt.style.border = "1px solid grey";
    elt.style.padding = "5px";
    elt.style.marginRight = "5px";
  }
// Recupère les liens de l'API
// Pour recuperer les données
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


// poster le message API
function ajaxPost(url, data, callback, isJson) {
  var req = new XMLHttpRequest();
  req.open("POST", url);
  req.addEventListener("load", function() {
    if(req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function(){
    console.error("Erreur réseau avec l'url " + url);
  });
  if(isJson) {
    // Définit le contenu de la requête comme étant du JSON
    req.setRequestHeader("Content-Type", "application/json");
    // Transforme la donnée du form JSON vers le format text avant l'envoi
    data = JSON.stringify(data);
  }
  req.send(data);
}
// Message flash
function showMsg(titre){
  var message = "Le lien " + titre + " à bien été ajouter";
          // creer un div
          var divElt = document.createElement('div');
          divElt.id = 'messageFlash';
          divElt.textContent = message;

          // style du div
          divElt.style.color = '#002c44';
          divElt.style.backgroundColor  = 'lightblue'; // #D6ECF6
          // divElt.style.marginTop = '20px';
          divElt.style.padding = '20px 10px';
          divElt.style.borderRadius = '5px';
          divElt.style.marginBottom = '20px';

          // addLinkContainerElt.innerHTML = '';
          // addLinkContainerElt.appendChild(divElt);
          addLinkContainerElt.insertBefore(divElt, addLinkElt);
          console.log('élément ajouter avec succès');

          setTimeout(function(){
          addLinkContainerElt.removeChild(divElt);
        }, 2000);

    }

// mise en forme des articles
// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
  }

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
var url = " https://oc-jswebsrv.herokuapp.com/api/liens";
ajaxGet(url, function(reponse){
  var listeLiens = JSON.parse(reponse);
  // Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
  listeLiens.forEach(function (lien) {
      var elementLien = creerElementLien(lien);
      containerElt.appendChild(elementLien);
  });
});