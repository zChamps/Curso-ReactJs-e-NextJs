import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

const Product = () => {
  // Pega os parametros da URL, nesse caso é ID pois na rota do APP.js definimos /:id
  const { id } = useParams()

  // Carregamento dinamico dos itens
  const url = `http://localhost:3000/products/${id}`
  const { data: product, loading, error } = useFetch(url)
  
  return (
    <div>
      {error && <p>Houve um erro!</p>}
      {loading && <p>Carregando!</p>}
      {product && <div>
        <p> {product.name}</p>
        <p> {product.price}</p>
      </div>}
      {product && <Link to={`/products/${product.id}/info`}>Mais informações...</Link>}
    </div>
  )
}

export default Product