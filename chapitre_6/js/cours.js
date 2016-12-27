// Acceder à la valeur saisie
var pseudoElt = document.getElementById('pseudo');
pseudoElt.value = 'Mikroo';

// Gestion du focus
// Affiche d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function(){
	document.getElementById('aidePseudo').textContent = "Entrez votre pseudo";
});
pseudoElt.focus();
// Suppression du message contextuel pourla saisie du pseudo
pseudoElt.addEventListener("blur", function(e){
	document.getElementById('aidePseudo').textContent = '';
});

// Cases à cocher
document.getElementById('confirmation').addEventListener('change', function(e){
	console.log("Demande de confirmation : " + e.target.checked);
});

// Boutons radio
var aboElts = document.getElementsByName("abonnement");
for(var i = 0; i < aboElts.length; i++) {
	aboElts[i].addEventListener('change', function(e){
		console.log("Formule d'abonnement choisie : " + e.target.value);
	});
}

// Listes déroulantes
// Affichage du code de nationalité choisi
document.getElementById('nationalite').addEventListener('change', function(e){
	console.log(e.target.value);
});





// Accès aux champs du formulaire
var form = document.querySelector("form");
// console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10
// console.log(form.elements[0].name); // Affiche pseudo
// console.log(form.elements[1].type);

// Soumission du formulaire
// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});

// Validation pendant la saisie
// Vérification de la longeur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function(e){
	var mdp = e.target.value; // valeur saisie dans le champ mdp
	var longueurMdp = "faible";
	var couleurMsg = "red"; // Longueur faible => couleur rouge
	if(mdp.length >= 8) {
		longueurMdp = "suffisante";
		couleurMsg = "green"; // Longueur suffisante => couleur verte 
	} else if(mdp.length >= 4){
		longueurMdp = "moyenne";
		couleurMsg = "orange"; // longueur moyenne => couleur orange
	}

	var aideMdpElt = document.getElementById('aideMdp');
	aideMdp.textContent = "Longueur : " + longueurMdp;
	aideMdp.style.color = couleurMsg; // Couleur du texte de l'aide
});



// Validation à la fin de la saisie
var regex = /@/; // La chaîne doit contenir le caractère @
console.log(regex.test("")); // Affiche false
console.log(regex.test("@")); // Affiche true
console.log(regex.test("sophie&mail.fr")); // Affiche false
console.log(regex.test("sophie@mail.fr")); // Affiche true

// Contrôle du courriel en fin de saisie
document.getElementById('courriel').addEventListener('blur', function(e){
	// Correspond à une chaîne de la forme xxx@yyy.zzz
	var regexCourriel = /.+@.+\..+/;
	var validiteCourriel = "";
	if(!regexCourriel.test(e.target.value)) {
		validiteCourriel = "Adresse invalide";
	}
	document.getElementById('aideCourriel').textContent = validiteCourriel;
});
