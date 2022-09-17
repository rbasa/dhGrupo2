import React, { useState, useEffect } from "react";

function UltimoUsuario(){
  let [ultimoUsuario, setUltimoUsuario] = useState({})
 
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/api/users")
      response = await response.json()
      setUltimoUsuario(await response.users.pop())
    }
    fetchData()
  }, [])

  return(
    <>
      <p>
        Ultimo usuario registrado:
      </p>
      <div>
      { ultimoUsuario.email }
      </div>
    </>
  );
}
export default UltimoUsuario;
