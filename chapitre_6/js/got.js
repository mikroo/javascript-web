// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

// var personnages = getPersonnages('ST');
// console.log(personnages[0]);

// Formulaire
maisons.forEach(function(maison){
    // Ajout des element
    var optElt = document.createElement('option');
        optElt.value = maison.code;
        optElt.textContent = maison.nom;
        document.getElementById('maison').appendChild(optElt);
});

var formElt = document.querySelector('form'); // recuperer le formulaire
formElt.addEventListener('change', function(e){
    var personnages = getPersonnages(e.target.value); // Liste des personnages
    var liElt = document.createElement('li'); // créer un éléments liElt
    liElt.textContent = getPersonnages(e.target.value);

    var ulElt = document.getElementById('persos'); // recuperer le conteneur ul
    ulElt.innerHTML = ""; // vider le coteneur ul
    personnages.forEach(function(personnage){
        var liElt = document.createElement('li');
        liElt.textContent = personnage;
        ulElt.appendChild(liElt); 
    });
});