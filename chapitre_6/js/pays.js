// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var inputElt = document.getElementById('pays');
inputElt.addEventListener('input', function(e){

    /* recupere le div ou les suggestion seron afficher */
    var suggestionsElt = document.getElementById('suggestions');
        /* supprimer tout les contenus du conteneur des suggestion */
        suggestionsElt.innerHTML = "";
    /* Une boucle qui va parcourir tout le tableau */ 
    for(var i = 0; i < listePays.length; i++) {
        /* stocker le mot rechercher dans la variable motRechercher*/
        motRechercher = listePays[i].indexOf(e.target.value); 
        /* Si la variable motRechercher ne retourne pas -1 */
        if(motRechercher !== -1) {
            /* creer un élément div */
            var divElt = document.createElement('div');
            /* ajouter une classe à l'élément div */
            divElt.className = "suggestion";
            /* ajoute du contenu textuel à l'élément div */
            divElt.textContent = listePays[i];
            /* Afficher l'élément dans la page */
            suggestionsElt.appendChild(divElt); 
            /* Lorsqu'on click sur le l'élément div */
            divElt.addEventListener('click', function(e){
                /* On complete mot par la suggestion */
                document.getElementById('pays').value = e.target.textContent;
                /* On vide le conteneur des suggestions */
                document.getElementById('suggestions').innerHTML = "";
            });
        }
    }
});