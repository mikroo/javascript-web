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
formElt.addEventListener('change', function(e) {
    var ulElt = document.getElementById('persos');
    personnages = getPersonnages(e.target.value);
    personnages.forEach(function(personnage){
        ulElt.innerHTML = "";
        var liElt = document.createElement('li');
        liElt.textContent = personnage;
        ulElt.appendChild(liElt);
    });
    console.log(personnages);
});
/*
// Gerer l'évenement
formElt.addEventListener('change', function(e){
    for(var i = 0; i < personnages.length; i++) {
        var liElt = document.createElement('li'); // Crée un élément li
        var personnages = getPersonnages(e.target.value);
        liElt.innerHTML = personnages[i];
        console.log(personnages[i]);
        document.getElementById('persos').appendChild(liElt);
    }

}); 
*/
