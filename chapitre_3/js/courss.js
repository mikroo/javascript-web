// https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation
// 1. creer un elemement
// 2. creer son identifiant
// 3. creer son text
// 4. ajouter

// Créationd du lien 
/*
linkElt = document.createElement('a');
linkElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
linkElt.id = "lienWiki";
linkElt.textContent = "liste";

// document.getElementById('contenu').appendChild(linkElt);

// Création du paragraphe
pEl = document.createElement('p');
paragraphe.id = "paragraphe";
paragraphe.textContent = "En voici une " + linkElt + " plus complète";

document.getElementById('contenu').appendChild(paragraphe);
*/
// 1. creer un element
var pElt = document.createElement('p');
var linkElt = document.createElement('a'); // creation de l'élément a
linkElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
linkElt.textContent = "liste";
pElt.appendChild(document.createTextNode("En voici une "));
pElt.appendChild(linkElt);
pElt.appendChild(document.createTextNode(" plus complète"));

// 2. inserer
document.getElementById('contenu').appendChild(pElt);