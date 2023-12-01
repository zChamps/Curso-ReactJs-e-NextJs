import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const NavBar = () => {
  return (
    <nav>
        
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>


    </nav>
  )
}

export default NavBar