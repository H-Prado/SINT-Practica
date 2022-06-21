function Comprobar(){

  // DECLARAMOS LAS VARIABLES
  var passwd = document.getElementById('passwd').value;
  var mayus= /[A-Z]/;
  var minus= /[a-z]/;
  var nums=  /[0-9]/;
  var espe=  /[/*+-]/;

  var tlph = document.getElementById("tlph").value;
  var cond_tlph= /^[6-9]\d{8}$/;

  var browser;

  //INFORMACIÓN SOBRE EL NAVEGADOR

  var browser;

  if(navigator.userAgent.match(/chrome|chromium|crios/i)){
  browser = "Google Chrome";
  }
  else if(navigator.userAgent.match(/firefox|fxios/i)){
  browser = "Firefox";
  }
  else if(navigator.userAgent.match(/safari/i)){
  browser = "Safari";
  }
  else if(navigator.userAgent.match(/opr\//i)){
  browser = "Opera";
  }
  else if(navigator.userAgent.match(/edg/i)){
  browser = "Edge";
  }
  else{
  browser="Desconocido";
  }
  document.forms.formulario.cbrowser.value = browser;
  //VERIFICAMOS LA CONTRASEÑA

  if (passwd.length == 0) {

  //VERIFICAMOS EL TELEFONO CUANDO HAY CONTRASEÑA

    if (tlph.length == 0) {
        return true;
      }

    else if (tlph.length != 9){
      alert("La longitud del número ha de ser de 9 dígitos");
      return false;
    }
    else if (!tlph.match(cond_tlph)) {
      alert("El teléfono ha de empezar por un 6, un 7, un 8 o un 9");
      return false;
    }
  }


  // COMPROBAMOS LOS CARACTERES

  else{

    if (!mayus.test(passwd)) {
      alert("La contraseña ha de contener al menos una mayúscula");
      return false;
    }
    if (!minus.test(passwd)) {
      alert("La contraseña ha de contener al menos una minúscula");
      return false;
    }
    if (!nums.test(passwd)) {
      alert("La contraseña ha de contener al menos algún número");
      return false;
    }
    if (!espe.test(passwd)) {
      alert("La contraseña ha de contener al menos algún caracter especial");
      return false;
    }

  // COMPROBAMOS LA LONGITUD

    if (passwd.length > 12) {
      alert("La contraseña es excesivamente larga");
      return false;
    }
    if (passwd.length < 6) {
      alert("La contraseña es demasiado corta");
      return false;
    }

  // COMPROBAMOS EL TELEFONO CUANDO SI HAY CONTRASEÑA

    if (tlph.length == 0) {
        return true;
    }

    else if (tlph.length != 9){
      alert("La longitud del número ha de ser de 9 dígitos");
      return false;
    }
    else if (!tlph.match(cond_tlph)) {
      alert("El teléfono ha de empezar por un 6, un 7, un 8 o un 9");
      return false;
    }

   //Si no ha habido ningún fallo, validamos
   return true;
  }
}

function Checkboxes(formulario){
 for (var i=9; i<15; i++){ //9 y 15 porque son los lugares que ocupan las 5 entradas del checkbox
    if (formulario.elements[i].type == "checkbox" ){
      formulario.elements[i].checked = formulario.elements[14].checked; //14 porque es el lugar que ocupa dicha casilla en el formulario
    }
  }
}

function changeMethodGET() {
  document.forms.formulario.method="GET";
  document.forms.formulario.enctype="application/x-www-form-urlencoded";
}

function changeMethodPOSTURL() {
  document.forms.formulario.method="POST";
  document.forms.formulario.enctype="application/x-www-form-urlencoded";
}

function changeMethodPOSTmultipart(){
  document.forms.formulario.method="POST";
  document.forms.formulario.enctype="multipart/form-data";
}
