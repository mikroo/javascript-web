function infosLiens(){
	// le nombre total de liens dans la page web ;
	// la cible du premier et du dernier lien.
	var total = document.querySelectorAll("a").length;
	console.log(total);

	var liens = document.querySelectorAll("a");
	console.log(liens[0]);
	console.log(liens[total -1]);
}

infosLiens();


function possede(class1, class2){
	// 1 recuperer toute les classe
	classes = document.querySelectorAll(class1, class2).classList;
	return classes;

}


possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur