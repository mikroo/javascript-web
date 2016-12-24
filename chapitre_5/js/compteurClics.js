/*
Exercice : compter les clics
*/
/*
function clic() {
	compteurClics++;
	document.getElementById("compteurClics").textContent = compteurClics;
}


var compteurClics = 0;

document.getElementById('clic').addEventListener('click', clic);

document.getElementById('desactiver').addEventListener('click', function(){
	document.getElementById('clic').removeEventListener('click', clic);
});

*/
function clic(){
	compteurClics++; // incrémenté les nombre des clics
	document.getElementById('compteurClics').textContent = compteurClics; // Afficher les nombre des clics
}

var compteurClics = 0; // Initiation de nombre des clics
document.getElementById('clic').addEventListener('click', clic); // Evenement du bouton cliquez-mois

document.getElementById('desactiver').addEventListener('click', function(){
	document.getElementById('clic').removeEventListener('click', clic);
});
