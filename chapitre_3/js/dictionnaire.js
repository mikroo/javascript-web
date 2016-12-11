// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

// 1. creation de la balise <dl>
var dlElt = document.createElement('dl');
document.getElementById('contenu').appendChild(dlElt);

for(var i = 0; i < mots.length; i++) {
    console.log(mots[i].terme);
    // 2. créaton de la balise </dt>
    var strongElt = document.createElement('strong'); // Création de la balise strong
    var dtElt = document.createElement('dt');
    strongElt.appendChild(dtElt);
    strongElt.appendChild(document.createTextNode(mots[i].terme));
    strongElt.appendChild(dtElt);

    document.querySelector('dl').appendChild(strongElt);

    // 3. création de la balise <dd>
    var ddElt = document.createElement('dd');
    ddElt.textContent = mots[i].definition;
    document.querySelector('dl').appendChild(ddElt);
}
// Utiliser la fonction forEach