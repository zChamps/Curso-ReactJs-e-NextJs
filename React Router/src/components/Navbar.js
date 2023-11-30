import { NavLink } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        {/* Linkando as paginas do site */}
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/About"}>Sobre</Link> */}

        {/* Usando o navLink temos acesso ao .active, que permite a alteração dinamica de estilos de acordo com a pagina que estamos da nav */}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>Sobre</NavLink>
        
    </nav>
  )
}

export default Navbar