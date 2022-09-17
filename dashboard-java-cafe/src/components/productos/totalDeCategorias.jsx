import React, { useState, useEffect } from "react";

function TotalDeCategorias(){
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
       Total de categorias: 
       { ` ${Object.keys(categorias).length}`}
      </p>
        
    </>
  );
  
}
export default TotalDeCategorias;
