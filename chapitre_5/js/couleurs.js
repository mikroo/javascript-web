/*
r = rouge;
j = jaune;
v = vert;
b = blanc;
*/
// Fonctino qui affiche les couleurs
function couleurs(key){

	switch(key.toLowerCase()){
		case 'r':
			key = 'red';
			break;
		case 'j':
			key = 'yellow';
			break;
		case 'v':
			key = 'green';
			break;
		case 'b':
			key = 'blue';
			break;
		default:
			key = 'white';
			break;
	}

	return key;
}

document.addEventListener('keypress', function(e){

	var divElts = document.getElementsByTagName('div');
	// Appliquer les couleur
	for(var i = 0; i < divElts.length; i++){
		divElts[i].style.backgroundColor = couleurs(e.key); // red is to replace with a automaticaly answer
	}
});


