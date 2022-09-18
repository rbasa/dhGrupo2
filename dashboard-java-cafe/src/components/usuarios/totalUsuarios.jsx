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
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Total de usuarios registrados: 
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                { qUsuarios > 0 ? qUsuarios : 'Loading' }
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
export default TotalUsuarios;
