window.addEventListener("load", function(){
    console.log("hola")
    let formulario = document.querySelector("form.formulario_usuarios");
    
    formulario.addEventListener("submit", function(e){

        let errores = [];
        let campoNombre = document.querySelector("#input-nombre");
        let campoMail = document.querySelector("#input-mail");

        if(campoNombre.value == ""){
            errores.push("Debes ingresar un nombre");
        }
        if(campoMail.value == ""){
            errores.push("Debes ingresar un mail");
        }
        if (errores.length>0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul")

            for(i=0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
        e.preventDefault()
    })

})