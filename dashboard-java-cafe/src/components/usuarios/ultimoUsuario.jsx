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
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-warning shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                Ultimo usuario registrado:
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
              { ultimoUsuario.email }
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-comments fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default UltimoUsuario;
