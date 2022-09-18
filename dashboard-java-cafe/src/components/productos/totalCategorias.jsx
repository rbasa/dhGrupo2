import React, { useState, useEffect } from "react";
import TarjetaCategoria from './TarjetaCategoria'
function Categorias(){
  let [categorias, setCategorias] = useState({})
 
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/api/products")
      response = await response.json()
      setCategorias(response.countByCategory)
    }
    fetchData()
  }, [])

  return(
    <>
    <div className="container">
        <div className="row gx-4 gx-lg-5">
          {Object.keys(categorias).map((key, index) => {
            return (
              <TarjetaCategoria categoria={key} cantidad={categorias[key]}/>
            );
          })}
        </div>
      </div>
    </>
  );
  
}
export default Categorias;
