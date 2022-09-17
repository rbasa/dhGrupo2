import React, { useState, useEffect } from "react";

function Productos(){
  let [productos, setProductos] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/api/products")
      response = await response.json()
      setProductos(response.productos)
    }
    fetchData()
  }, [])

  return(
    <>
      <p>
        Estos son los productos listados
      </p>
      <ul>
        { productos.map( e => {
          return(<li>{e.name}</li>)
        } )}
      </ul>
    </>
  );
  
}
export default Productos;
