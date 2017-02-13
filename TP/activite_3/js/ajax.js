//---------------------------
//          AJAX
//---------------------------
// Recupère les liens de l'API
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

// -----------------------------
// LES FONCTIONS
// -----------------------------
// styles css des elements
function styleForm(elt){
    elt.style.border = "1px solid grey";
    elt.style.padding = "5px";
    elt.style.marginRight = "5px";
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

// mise en forme des liens
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