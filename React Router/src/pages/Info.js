import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    // Obtendo o id com base na url
    const {id} = useParams()

  return (
    <div>O id do produto é: {id}</div>
  )
}

export default Info