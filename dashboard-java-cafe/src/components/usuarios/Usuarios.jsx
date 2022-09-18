import React, { useState, useEffect } from "react";
import TarjetaUsuarios from './TarjetaUsuarios'
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
      <div className="container">
        <div className="row gx-4 gx-lg-5">
        { usuarios.map( e => {
          return(<TarjetaUsuarios usuario={e.name} mail={e.email}/>)
        } )}
        </div>
      </div>
    </>
  );
  
}
export default Usuarios;
