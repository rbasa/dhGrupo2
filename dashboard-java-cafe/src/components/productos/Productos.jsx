import React, { useState, useEffect } from "react";
import TarjetaProductos from './TarjetaProducto'

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
      <div class="row">

        { productos.map( e => {
          return( <TarjetaProductos name = {e.name} description = {e.description}/>)
          // return(<li>{e.name}</li>)
        } )}
      </div>
    </>
  );
  
}
export default Productos;
