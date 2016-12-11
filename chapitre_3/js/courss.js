
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