import React, { useState, useEffect } from "react";

function Usuarios(){
  let [usuarios, setUsuarios] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/api/users")
      response = await response.json()
      setUsuarios(response.users)
    }
    fetchData()
  }, [])

  return(
    <>
      <p>
        Estos son los usuarios registrados
      </p>
      <ul>
        { usuarios.map( e => {
          return(<li>{e.name}</li>)
        } )}
      </ul>
    </>
  );
  
}
export default Usuarios;
