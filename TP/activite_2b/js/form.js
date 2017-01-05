
// include
function include(lien) {
  var script = document.createElement('script');
      script.src = lien;
  document.querySelector('body').insertBefore(script, document.querySelector('script'));
}

include('../js/form.js');





var Form = {
  init: function(id, placeholder, type, required){
    this.id = id,
    // this.name = name,
    this.placeholder = placeholder,
    this.type = type,
    // this.value = value,
    this.type = type,
    this.required = required
    // this.disabled = disabled
  },
  createFormElt: function(eltToCreate, name = "", placeholder = '', required = '', type = '', id = '') {
    var nomElt = '';

    if(eltToCreate === 'button') {
      nomElt = document.createElement(eltToCreate);
      nomElt.textContent = placeholder;
      nomElt.type = type;

    } else if (eltToCreate === 'input') {
      nomElt = document.createElement(eltToCreate);
      nomElt.id = id;
      nomElt.placeholder = placeholder;
      nomElt.type = type;
      nomElt.required = required;
      nomElt.name = name;

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



