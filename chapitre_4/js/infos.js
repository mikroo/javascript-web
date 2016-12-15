// 1. recuperer la hauteur
var infosStyle = getComputedStyle(document.getElementById('contenu'));
console.log('hauteur ' + infosStyle.height);
// 2. recuperer la largeur
console.log('largeur ' + infosStyle.width);

// 2. creer un element ul
var liste = document.createElement('ul'); // Liste ul 
var longeur = document.createElement('li');
longeur.appendChild(document.createTextNode('Hauteur : ' + infosStyle.height));
liste.appendChild(longeur); // Ajout dans la liste ul

var largeur = document.createElement('li');
largeur.appendChild(document.createTextNode('largeur : ' + infosStyle.width));
liste.appendChild(largeur); // Ajout dans la liste ul

document.getElementById('infos').appendChild(liste);