window.addEventListener("load", function(){

  let formulario = document.querySelector("form.formulario_producto");
  let nombreProducto = document.getElementById("nombre_producto");
  let descripcionProducto = document.getElementById("descripcion_producto");
  let precioProducto = document.getElementById("precio_producto");
  let errorProducto = document.querySelector(".dinamic-product-feedback");
  let errorDescripcion = document.querySelector(".dinamic-description-feedback");
  let errorPrecio = document.querySelector(".dinamic-price-feedback");

  nombreProducto.addEventListener('blur', (e)=>{
    nombreProducto.value.length < 3 && nombreProducto.value.length > 0 ? errorProducto.innerHTML = 'El producto debe tener al menos 3 letras': errorProducto.innerHTML = '';
  });
  descripcionProducto.addEventListener('blur', (e)=>{
    (descripcionProducto.value + e.key).length < 0 ? errorDescripcion.innerHTML = "Debes ingresar una descripcion" : errorDescripcion.innerHTML ="";
  });
  precioProducto.addEventListener('blur', (e)=>{
   !typeof(precioProducto.value) == "number" ? errorPrecio.innerHTML = "El campo precio debe ser numerico" : errorPrecio.innerHTML ="";
  });

  formulario.addEventListener("submit", function(e){
    let errores = [];

    if(nombreProducto.value == ""){
      errores.push("Debes ingresar un nombre");
    }
    if(precioProducto.value == ""){
      errores.push("Debes ingresar un precio");
    }
    if(descripcionProducto.value == ""){
      errores.push("Debes ingresar una descripcion");
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
