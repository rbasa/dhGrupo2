import './App.css';
import React from "react";
import Header from './components/partials/header'
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
      <TotalProductos/>
      <Productos/>
      <Categorias/>
      <TotalCategorias/>
      <TotalUsuarios/>
      <Usuarios/>
      <UltimoUsuario/>
    </>

  );
}

export default App;
