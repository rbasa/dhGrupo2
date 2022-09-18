import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link, Route } from 'react-router-dom';

import Productos from '../productos/Productos';
import TotalProductos from '../productos/totalProductos';
import Categorias from '../productos/totalCategorias';
import TotalCategorias from '../productos/totalDeCategorias';
import Usuarios from '../usuarios/Usuarios';
import TotalUsuarios from '../usuarios/totalUsuarios';
import UltimoUsuario from '../usuarios/ultimoUsuario';


function Sidebar(){
  return(
    <>
    <div id="wraper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <FontAwesomeIcon icon={faCoffee} />
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"/>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Productos
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/productos" target="">
            {/* <span className="material-symbols-outlined menu navs">shopping_cart</span> */}
            {/* <i className="fas fa-fw fa-cog"></i> */}
            <span>Listado de Productos</span>
          </Link>
          {/* <a className="nav-link collapsed" href="#" data-toggle="collapse">
          </a> */}
        </li>
        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            {/* <i className="fas fa-fw fa-wrench"></i> */}
            <span>Cantidad de Productos</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#"  data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Categorias</span>
          </a>
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>
        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          Usuarios
        </div>
        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#"  data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Listado de Usuarios</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#"  data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Cantidad de Usuarios</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#"  data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Ultimo Usuario</span>
          </a>
        </li>
      </ul>
    </div>
    </>
  );
  
}
export default Sidebar;

