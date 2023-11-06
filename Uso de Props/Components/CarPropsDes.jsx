import React from 'react'

const CarPropsDes = ({marca, ano , km}) => {
  return (
    <div>
        <ul>
            <li>Marca: {marca}</li>
            <li>Ano: {ano}</li>
            <li>KM: {km}</li>
        </ul>
    </div>
  )
}

export default CarPropsDes