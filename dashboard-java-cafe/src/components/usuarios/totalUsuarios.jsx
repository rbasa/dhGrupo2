import React, { useState, useEffect } from "react";

function TotalUsuarios(){
  let [ qUsuarios, setQUsuarios] = useState(0)
 
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/api/users")
      response = await response.json()
      setQUsuarios(response.count)
    }
    fetchData()
  }, [])
  return(
    <>
      <p>
        El total de usuarios registrados es de: 
      </p>
      <p>
      { qUsuarios > 0 ? qUsuarios : 'Loading' }
      </p>
    </>
  );
  
}
export default TotalUsuarios;
