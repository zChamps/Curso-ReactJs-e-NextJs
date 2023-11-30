import { Link } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import "./Home.css"

const Home = () => {
    const url = "http://localhost:3000/products"

    const{data: items, loading, error} = useFetch(url)

  return (
    <div>
    <h1>Home</h1>
    {error && <p>{error}</p>}
    {loading && <p>Carregando!</p>}
    {/* Importando dados de forma dinamica em uma pagina da rota */}
    <ul className="products">
        {items && items.map(item => {
           return <li key={item.id}>
                <h2>{item.name}</h2>
                <p>R$ {item.price}</p>
                <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
        })}
    </ul>



    </div>
  )
}

export default Home