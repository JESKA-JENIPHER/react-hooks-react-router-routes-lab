import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to={'/'} exact style={{marginRight:'10px'}}>Home</NavLink>
    <NavLink to={'/movies'} exact style={{marginRight:'10px'}}>Movies</NavLink>
    <NavLink to={'/directors'} style={{marginRight:'10px'}}>Directors</NavLink>
    <NavLink to={'/actors'} style={{marginRight:'10px'}}>Actors</NavLink>
  </div>
  );
}

export default NavBar;
