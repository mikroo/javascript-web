// le contenu HTML
document.getElementById('langages').innerHTML += '<li id="c">C</li>'; // Pour ajouter un élément
// document.getElementById('contenu').innerHTML = ""; // Pour vider un élément



// Le contenu textuel
// ******************

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";



// Les attributs
// *************

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id","titre");


// LES CLASSES
// ***********
var titreElt = document.querySelector("h1");
titreElt.classList.remove("debut") // Suppresion de la classe "debut"
titreElt.classList.add("titre");
console.log(titreElt);




/*	AJOUTER UN NOUVEL ELEMENT
 *	Création de l'élément
 */
 var pythonElt = document.createElement("li"); // Création d'un élément li
 pythonElt.id = "python"; // Définition de son identifiant
 pythonElt.textContent = "Python" // Définition de son contenu textuel
 document.getElementById("langages").appendChild(pythonElt) // Insertion du nouvel élément


/*	VARIANTES POUR AJOUTER UN ELEMENT
 * 	Création d'un noeud textuel
 */
 var rubyElt = document.createElement('li'); // Création d'un élément li
 rubyElt.id = "ruby"; // Définition de son identifiant
 rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
 document.getElementById("langages").appendChild(rubyElt) // Insertion du nouvel élément

// Ajout d'un noeud avant un aute noeud
var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "Perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, document.getElementById('php'));


/*	REMPLACER OU SUPPRIMER UN NOEUD
 * 	Remplacer un noeud existant

 var bashElt = document.createElement("li"); // Création d'un élément li
 bashElt.id = "bash"; // Définition de son identifiant
 bashElt.textContent = "Bash"; // Définition de son contenu textuel
 // Remplacement de l'élément identifié par "perl" par le nouvel élément
 document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));
 */

 // Supprimer un noeud existant
 document.getElementById("langages").removeChild(document.getElementById("php"));
