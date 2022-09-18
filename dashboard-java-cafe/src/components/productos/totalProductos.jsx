import React, { useState, useEffect } from "react";

function TotalProductos(){
  let [ qProductos, setQproductos] = useState(0)
 
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8080/api/products")
      response = await response.json()
      setQproductos(response.productos.length)
    }
    fetchData()
  }, [])
  return(
    <>
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Total de productos disponibles: 
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                { qProductos > 0 ? qProductos : 'Loading' }
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
export default TotalProductos;
