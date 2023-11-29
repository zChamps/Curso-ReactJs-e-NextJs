import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    // Pega os parametros da URL, nesse caso é ID pois na rota do APP.js definimos /:id
    const {id} = useParams()

  return (
    <div>Product: {id}</div>
  )
}

export default Product