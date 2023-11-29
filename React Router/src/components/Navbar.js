import { Link } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        {/* Linkando as paginas do site */}
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>Sobre</Link>
    </nav>
  )
}

export default Navbar