import './Assets/css/styles.css';
import React from "react";
import { Link, Route, Swith } from 'react-router-dom';

import Header from './components/partials/header'
import Sidebar from './components/partials/Sidebar';
import Productos from './components/productos/Productos';
import TotalProductos from './components/productos/totalProductos';
import Categorias from './components/productos/totalCategorias';
import TotalCategorias from './components/productos/totalDeCategorias';
import Usuarios from './components/usuarios/Usuarios';
import TotalUsuarios from './components/usuarios/totalUsuarios';
import UltimoUsuario from './components/usuarios/ultimoUsuario';



function App() {
  return (
    <>
      <Header/>
      <div class="row">
       <div class="col-2">
        <Sidebar/>
       </div>
       <div class="col-10">
        <div class="row">
          <TotalUsuarios/>
          <TotalProductos/>
          <TotalCategorias/>
          <UltimoUsuario/>
        </div>
        <Categorias/>
        <Productos/>
        </div>
      </div>
      <Usuarios/>
    </>
  );
}

export default App;
