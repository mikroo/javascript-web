/* 
Activité 1
*/
// include
function include(lien) {
  var script = document.createElement('script');
      script.src = lien;
  document.querySelector('body').insertBefore(script, document.querySelector('script'));
}

include('../js/objects.js');


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
function gererForm(formElt){
  var listeLiens = [];
  var nom = formElt.elements.nom.value;
  var titre = formElt.elements.titre.value;
  var lien = formElt.elements.lien.value;
  // Si le lien ne commence pas par http => rajouter un
  var regex = /^http:\/\//;
  if(!regex.test(lien)) {
    nwLien = "http://" + lien;
  }
  

  var newLink = Object.create(ListeLiens);
  newLink.init(titre, nwLien, nom);
  listeLiens.push(newLink);

  // il doit afficher un seul entrer
  ListeLiens.decrire(listeLiens);
  // fonction qui va créer un message plash
  function showMsg(titre){
    var message = "Le lien " + titre + " à a bien été ajouter";
    // creer un div
    var divElt = document.createElement('div');
    divElt.id = 'messageFlash';
    divElt.textContent = message;

    // Designe le div
    divElt.style.color = '#002c44';
    divElt.style.backgroundColor  = 'lightblue'; // #D6ECF6
    divElt.style.marginTop = '20px';
    divElt.style.padding = '20px 10px';
    divElt.style.borderRadius = '5px';

    // Ajouter le tout dans dom
    document.getElementById('formulaire').appendChild(divElt);
  }

  // Affiche un méssage pendand deux secondes
  showMsg(titre);
  // Il va supprimer le div après 2 secondes
  setTimeout(function(){
    document.querySelector('#formulaire').removeChild(document.querySelector('#messageFlash'));
  }, 2000);

  

  listeLiens.forEach(function(lien){
    console.log(lien);
  });
}

function createForm(){
  // Supprimer le bouton ajouter un lien
  document.querySelector('#formulaire').removeChild(document.querySelector('button'));
  // fonction pour crée un formulaire
  var formElt = document.createElement('form');
  var nomElt = document.createElement('input');
  nomElt.placeholder = 'Prénom';
  nomElt.name = 'nom';
  var titreElt = document.createElement('input');
  titreElt.placeholder = 'Titre';
  titreElt.name = 'titre';
  var urlElt = document.createElement('input');
  urlElt.placeholder = 'url du web';
  urlElt.required = 'required';
  urlElt.name = 'lien';
  var sendElt = document.createElement('button');
  sendElt.textContent = 'Ajouter';

  formElt.appendChild(nomElt);
  formElt.appendChild(titreElt);
  formElt.appendChild(urlElt);
  formElt.appendChild(sendElt);
  document.getElementById('formulaire').appendChild(formElt);


  // fonction qui gère le formulaire
  formElt.addEventListener('submit', function(e){
    gererForm(formElt);
    e.preventDefault();
  });
}


// Crée le formulaire
var ajouterUnLien = document.querySelector('#ajoutLien');
ajouterUnLien.addEventListener('click', function(){ createForm(); });

// Afficher le tableau
ListeLiens.decrire(listeLiens);
listeLiens.forEach(function(lien){
  console.log(lien);
});
