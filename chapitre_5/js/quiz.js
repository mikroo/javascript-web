// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var nombreQuestions = 1;
questions.forEach(function(question){
// creer la paragraphe
var pElt = document.createElement('p'),
    divElt = document.createElement('div'),
    div1Elt = document.createElement('div'),
    strongElt = document.createElement('strong'),
    emElt = document.createElement('em'),
    buttonElt = document.createElement('button');

    strongElt.textContent = "Question : " + (nombreQuestions++) + " : "; // titre de la question
    emElt.textContent = question.enonce;
    buttonElt.textContent = "Afficher la réponse";

    // Ajout dan le paragraphe
    pElt.appendChild(divElt);
    pElt.appendChild(div1Elt);
    divElt.appendChild(strongElt);
    divElt.appendChild(emElt);
    div1Elt.appendChild(buttonElt);
    // Ajout à la page 
    document.getElementById('contenu').appendChild(pElt);

    // Gestion des boutons
    var afficheReponse = document.getElementsByTagName('button');
    buttonElt.addEventListener('click', function(e){
        // creer un element 
        var divReponse = document.createElement('div');
        divReponse.textContent = question.reponse;
        div1Elt.innerHTML = "";
        div1Elt.appendChild(divReponse);
        console.log(divReponse.textContent);
    }); 
});