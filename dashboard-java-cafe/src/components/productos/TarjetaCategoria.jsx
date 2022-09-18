import React from "react";

function Categorias(props){

  return(
    <>
      <div className="col-md-3 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">
              {props.categoria}
            </h2>
            <p className="card-text">
              {props.cantidad}
            </p>
          </div>
          {/* <div className="card-footer">
            <a className="btn btn-primary btn-sm" href="#!">More Info</a>
          </div> */}
        </div>
      </div>
    </>
  );
  
}
export default Categorias;
