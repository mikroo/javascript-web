// La propriété style
var pElt = document.querySelector('p');
pElt.style.color = 'red';
pElt.style.margin = '50px';

// Les propriété CSS composées
pElt.style.fontFamily = 'Arial';
pElt.style.backgroundColor = 'black';

// Les limites de la propriété style
var paragraphesElt = document.getElementsByTagName('p');
console.log(paragraphesElt[0].style.color); // Affiche "red"
console.log(paragraphesElt[1].style.color); // Affiche "green"
console.log(paragraphesElt[2].style.color); // N'affiche rien 

// La fonction getComputedStyle
var stylePara = getComputedStyle(document.getElementById('para'));
console.log(stylePara.fontStyle); // Affiche 'italic'
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB