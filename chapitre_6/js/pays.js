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

// Gerer l'input
var inputElt = document.getElementById('pays');
inputElt.addEventListener('input', function(e){
    // comparer l'element entrer par l'utilisateur si il correspond au tableau
    // lister les pay
    for(var i = 0; i < listePays.length; i++) {
        // console.log(listePays[i]);
        motRechercher = listePays[i].indexOf(e.target.value);
        if(motRechercher !== -1) {
            // console.log(motRechercher);
            // console.log(listePays[i]);
            // creer un element div
            var divElt = document.createElement('div');
            divElt.className = "suggestion";
            divElt.textContent = listePays[i];

            document.getElementById('suggestions').innerHTML = "";
            document.getElementById('suggestions').appendChild(divElt); // Ajout des element dans la page

            // gerer l'interaction dans pour pouvoir clicker l'élément et l'inserer dans l'input
            divElt.addEventListener('click', function(e){
                // recupere l'élément input pour pouvoir inserer la sugestions
                document.getElementById('pays').value = e.target.textContent;
            });
        }
    }
});




// Create an array. (The elements start at index 0.)
// var ar = ["ab", "cd", "ef", "ab", "cd"];
// Determine the first location of "cd".
// document.write(ar.indexOf("ef") + "<br/>");
