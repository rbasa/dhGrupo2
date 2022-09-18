import React from "react";

function Productos(props){
  return(
    <>
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                {props.name}
              </h6>
          </div>
          <div class="card-body">
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
}
export default Productos;
