// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste
// document.getElementById("langages").innerHTML = "";

// Le contenu textuel
// ******************
// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation"; 


// Les attributs
// *************
// Definition de l'attribut "id" du premier titre
document.querySelector('h1').setAttribute('id', 'titre');
// ou document.querySelector('h1').id = 'titre';

// Les classes
// ***********
var titreElt = document.querySelector('h1'); // accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "Titre"
console.log(titreElt);