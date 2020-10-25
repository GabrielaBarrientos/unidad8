var form = document.querySelector('form');
var user = document.getElementById('usuario');
var pass = document.getElementById('clave');

form.onsubmit = function(e) {

    if (user.value === '' || pass.value === '') {
        e.preventDefault();
        alert('Los campos Usuario y Clave deben estar completos!');
    }
    else {
      if (!user.value.includes('@')) {
        e.preventDefault();
        alert('El nombre de usuario debe incluir una arroba!');
      }
      else {
        alert("Los datos ingresados con correctos");
      }
    } 

};

