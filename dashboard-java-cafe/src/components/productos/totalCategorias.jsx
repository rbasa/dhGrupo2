import React, { useState, useEffect } from "react";

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
      <p>
        Estos son los categorias listados
      </p>
        {Object.keys(categorias).map((key, index) => {
          return (
            <div key={index}>
              <div>
                {`Cantidad de ${key}:`} {categorias[key]}
              </div>
            </div>
          );
        })}
    </>
  );
  
}
export default Categorias;
