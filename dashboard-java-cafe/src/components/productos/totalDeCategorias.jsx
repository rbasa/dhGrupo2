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
  // 
  return(
    <>     
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Total de categorías: 
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                {` ${Object.keys(categorias).length}` }
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
export default TotalDeCategorias;
