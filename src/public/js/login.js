window.addEventListener("load", function(){

  let formulario = document.querySelector("form.formulario_login");
  let campoMail = document.getElementById("email_login");
  let campoPassword = document.getElementById("password_login");
  let errorMail = document.querySelector(".dinamic-mail-feedback");
  let errorPassword = document.querySelector(".dinamic-password-feedback");


  campoPassword.addEventListener('keypress', (e)=>{
    (campoPassword.value + e.key).length < 8 ? errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres" : errorPassword.innerHTML ="";
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

    if(campoMail.value == ""){
      errores.push("Debes ingresar un mail");
    }
    if(campoPassword.value == ""){
      errores.push("Debes ingresar una contraseña");
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