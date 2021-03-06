// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
 // Exécute un appel AJAX POST
 // Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
 // Le paramètre isJson permet d'indiquer si l'envoi concerne des données JSON
 function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST",url);
    req.addEventListener('load', function(){
        if(req.status >= 200 && req.status > 500) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });

    req.addEventListener('error', function(){
        console.error("Erreur réseau avec lURL " + url);
    });
    if(isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/js");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
 }