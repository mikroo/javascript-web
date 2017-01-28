/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
/*
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
*/

// 1. url 
var url = "https://oc-jswebsrv.herokuapp.com/api/liens";
// 1. recupérer les liens
ajaxGet(url, function(reponse){
  var listeLien = JSON.parse(reponse);
  console.log(listeLien[0]);
})




// TODO : compléter ce fichier pour ajouter les liens à la page web
/* Fonction insertAfter() */
function insertAfter(newElement, afterElement) {
    var parent = afterElement.parentNode;
  
    if (parent.lastChild === afterElement) { // Si le dernier élément est le même que l'élément après lequel on veut insérer, il suffit de faire appendChild()
        parent.appendChild(newElement);
    } else { // Dans le cas contraire, on fait un insertBefore() sur l'élément suivant
        parent.insertBefore(newElement, afterElement.nextSibling);
    }
}
// Fonction qui va afficher le message flash
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

          zoneAjoutLien.innerHTML = '';
          zoneAjoutLien.appendChild(divElt);
          console.log('élément ajouter avec succès');

          setTimeout(function(){
          zoneAjoutLien.removeChild(divElt);
        }, 2000);
    }

// Fonction qui  met en forme les liens
function createLink(link){
  // article block
  var articleElt = document.createElement('article');
  articleElt.className = 'lien';
  // h4 titre
  var h4Elt = document.createElement('h4');
  h4Elt.style.display = 'inline';
  // a lien
  var aElt = document.createElement('a');
  aElt.href = link.url;
  aElt.textContent = link.titre;
  // a style
  aElt.style.textDecoration = 'none';
  aElt.style.color = '#428bca';
  // ajout a + h4 dans articleElt
  h4Elt.appendChild(aElt);
  articleElt.appendChild(h4Elt);
  // url
  var spanElt = document.createElement('span');
  spanElt.textContent = ' ' + link.url;
  articleElt.appendChild(spanElt);
  // auteur
  var auteurSpanElt = document.createElement('span');
  auteurSpanElt.style.display = 'block';
  auteurSpanElt.textContent = 'Ajouté par ' + link.auteur;
  articleElt.appendChild(auteurSpanElt);

  return articleElt;
}

// créer le bouton ajouter un lien
var bodyElt = document.querySelector('body');
var contenuElt = document.querySelector('#contenu');

var zoneAjoutLien = document.createElement('div');
    zoneAjoutLien.id = 'zoneAjoutLien';
    insertAfter(zoneAjoutLien, document.querySelector('h1'));

var ajoutLien = document.createElement('button');
    ajoutLien.textContent = 'Ajouter un lien';
    ajoutLien.style.marginBottom = '20px'; 

    document.querySelector('#zoneAjoutLien').appendChild(ajoutLien);

    ajoutLien.addEventListener('click', function(){
      zoneAjoutLien.innerHTML = ''; // vider la zone qui contien l'élément ajouter un lien
      // creer le formulaire
      var formElt = document.createElement('form');
      formElt.style.marginBottom = '20px';

      var titreElt = document.createElement('input');
      titreElt.name = 'titre';
      titreElt.placeholder = 'Entrez le titre du lien';
      titreElt.required = true;

      var urlElt = document.createElement('input');
      urlElt.name = 'lien';
      urlElt.placeholder = 'Entrez l\'URL du lien';
      urlElt.required = true;

      var auteurElt = document.createElement('input');
      auteurElt.name = 'auteur';
      auteurElt.placeholder = 'Entrez votre nom';
      auteurElt.required = true;

      var sendInput = document.createElement('input');
      sendInput.id = 'ajouter'; 
      sendInput.value = 'Ajouter';
      sendInput.type = 'submit';

      formElt.appendChild(titreElt);
      formElt.appendChild(urlElt);
      formElt.appendChild(auteurElt);
      formElt.appendChild(sendInput);
      document.querySelector('#zoneAjoutLien').appendChild(formElt);
      //Style élément inputs
      var inputElts = document.querySelectorAll('input');
          for(var i = 0; i < inputElts.length; i++){
            inputElts[i].style.padding = '5px';
            inputElts[i].style.marginRight = '20px';
          }

      // Gerer le formulaire
      formElt.addEventListener('submit', function(e){
        // ^https?:\/\/[a-z]+\.[a-z]{2,6}
        var regex = /^https?:\/\/[a-z]+\.[a-z]{2,6}/;
        var titre = formElt.elements.titre.value;
        var lien = formElt.elements.lien.value;
        if(!regex.test(lien)){
          lien = 'http://' + lien;  
        }
        var auteur = formElt.elements.auteur.value;

        var data = new FormData(formElt);
        /*
        // Ajouter un nouveau lien dans le dom
        var data = {
                  titre: titre,
                  url: lien,
                  auteur: auteur
                };
        */
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", data, function(){

        }, true);
        
        var singleLink = createLink(newLink);
        contenuElt.insertBefore(singleLink, contenuElt.firstChild);
        // Affiche le message flash
        showMsg(titre);

        // vider la zone bouton ajouter un lien
        zoneAjoutLien.appendChild(ajoutLien);
        e.preventDefault();
      });
    });

/*
// lecture des éléments
listeLiens.forEach(function(lien){
  var singleLink = createLink(lien);
  contenuElt.appendChild(singleLink);
});
*/

// 1. url 
var url = "https://oc-jswebsrv.herokuapp.com/api/liens";
// 1. recupérer les liens
ajaxGet(url, function(reponse){
  var listeLiens = JSON.parse(reponse);
  console.log(listeLiens);
    listeLiens.forEach(function(lien){
      var singleLink = createLink(lien);
      contenuElt.appendChild(singleLink);
    });

})
