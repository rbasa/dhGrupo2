window.addEventListener("load", function(){

  let formulario = document.querySelector("form.formulario_usuarios");
  let campoNombre = document.getElementById("input-nombre");
  let campoMail = document.getElementById("input-mail");
  let campoRepetir = document.getElementById("input-repetir");
  let campoPassword = document.getElementById("inpu-password");
  let errorNombre = document.querySelector(".dinamic-name-feedback");
  let errorMail = document.querySelector(".dinamic-mail-feedback");
  let errorPassword = document.querySelector(".dinamic-password-feedback");
  let errorRepetir = document.querySelector(".dinamic-repeat-feedback");

  campoNombre.addEventListener('blur', (e)=>{
    campoNombre.value.length < 3 && campoNombre.value.length > 0 ? errorNombre.innerHTML = 'El nombre debe tener al menos 3 letras': errorNombre.innerHTML = '';
  });
  campoPassword.addEventListener('keypress', (e)=>{
    (campoPassword.value + e.key).length < 8 ? errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres" : errorPassword.innerHTML ="";
  });
  campoRepetir.addEventListener('keypress', (e)=>{
    campoRepetir.value + e.key == campoPassword.value ? errorRepetir.innerHTML = "Las contraseñas coinciden" : errorRepetir.innerHTML ="Las contraseñas deben coincidir";
  });
  campoMail.addEventListener('blur', (e)=>{
    // Valida con expresión regular los carácteres válidos para una dirección de email
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(campoMail.value) ? errorMail.innerHTML = '' : errorMail.innerHTML = 'Mail inválido';
    // lo hago en un if ternario. comentado esta el if entero
    
    // if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(campoMail.value)){
    //   errorMail.innerHTML = ''
    // } else {
    //   // alert("La dirección de email es incorrecta!.");
    //   errorMail.innerHTML = 'Mail inválido'
    //  }
  });
  
  formulario.addEventListener("submit", function(e){
    let errores = [];

    if(campoNombre.value == ""){
      errores.push("Debes ingresar un nombre");
    }
    if(campoMail.value == ""){
      errores.push("Debes ingresar un mail");
    }
    if (errores.length>0){
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");

      for(i=0; i < errores.length; i++){
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
    
  });
});