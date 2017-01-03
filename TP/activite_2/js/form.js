var Form = {
  createFormElt: function(eltToCreate, placeholder = '') {
    var nomElt = '';

    if(eltToCreate === 'button') {
      nomElt = document.createElement(eltToCreate);
      nomElt.textContent = placeholder;
      console.log('élément ' + eltToCreate + ' crée');

    } else if (eltToCreate === 'input') {
      nomElt = document.createElement(eltToCreate);
      nomElt.placeholder = placeholder;
      // parametre de input
      console.log('élément ' + eltToCreate + ' crée');
    } else {
      nomElt = document.createElement(eltToCreate);
    }
    return nomElt;
  },
  createForm: function(formElt,tabElts,idConteneur) {
    var formElt = formElt;
    tabElts.forEach(function(tabElt){
      formElt.appendChild(tabElt);
    });
    document.getElementById(idConteneur).appendChild(formElt);
  }
};