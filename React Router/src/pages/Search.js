import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import { Link, useSearchParams } from 'react-router-dom'


const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const{data: items, loading, error} = useFetch(url)

  return (
    <div>
        <ul className="products">
        {error && <p>{error}</p>}
        {loading && <p>Carregando!</p>}
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

export default Search