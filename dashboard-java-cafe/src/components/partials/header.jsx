import React from "react";
import LogoJavaCafe from "../../Assets/images/logo.svg"
import { Link } from 'react-router-dom'

function Productos(){
  return(
    <>
      <header>
        <a href="/">
          <div class="logo">
            <img src={ LogoJavaCafe } alt="logo"/>
          </div>
        </a>
        <ul>
          <li>
            <Link className="navbar-brand m-0" to="/" target="_blank">
              {/* <span className="material-symbols-outlined menu navs">shopping_cart</span> */}
              <a href="/">Home</a>
            </Link>
          </li>
          <li>
            <Link className="navbar-brand m-0" to="/" target="_blank">
              {/* <a href="/cart"><span class="material-symbols-outlined menu navs">shopping_cart</span></a> */}
              <a href="/cart">Products</a>
            </Link>
          </li>
          <li>
            <Link className="navbar-brand m-0" to="/" target="_blank">
              {/* <a href="/users/login"><span class="material-symbols-outlined menu navs">person</span></a> */}
              <a href="/users/login">Categories</a>
            </Link>
          </li>
          <li>
            <Link className="navbar-brand m-0" to="/" target="_blank">
              {/* <span className="material-symbols-outlined menu navs">shopping_cart</span> */}
              <a href="/users/profile">Users</a>
            </Link>            
          </li>
        </ul>
      </header>
    </>
  );
  
}
export default Productos;
