window.onload = iniciar;

function iniciar() {
  document.getElementById('enviar').addEventListener('click', validate, false);
}

function valida_email() {
    var elemento = document.getElementById('email');
    if (elemento.value == ''  ){
      alert('El campo "Email" no puede estar vacío');
      return false;      
    }
    return true;
  }

function valida_url() {
    var elemento = document.getElementById('url');
    if (elemento.value == '') {
      alert('El campo "Dirección web" no puede estar vacío');
      return false;
    }
    return true;
  }

  

  
function validate() {
    if (valida_email () && valida_url() && confirm('Pulse aceptar si desea enviar su sugerencia')){
      return true;
    }
    return false;
  }