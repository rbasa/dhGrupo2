import React, { useState, useEffect } from "react";

function TotalProductos(){
  let [ qProductos, setQproductos] = useState(0)
 
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/api/products")
      response = await response.json()
      setQproductos(response.productos.length)
    }
    fetchData()
  }, [])
  return(
    <>
      <p>
        El total de productos disponibles es de: 
      </p>
      <p>
      { qProductos > 0 ? qProductos : 'Loading' }
      </p>
    </>
  );
  
}
export default TotalProductos;
