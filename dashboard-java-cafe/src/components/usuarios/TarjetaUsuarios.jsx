import React from "react";

function TarjetaUsuarios(props){
  return(
    <>
      <div className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">
              {props.usuario}
            </h2>
            <p className="card-text">
              {props.mail}
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
export default TarjetaUsuarios;
