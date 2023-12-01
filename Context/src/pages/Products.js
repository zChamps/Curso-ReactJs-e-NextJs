import {useContext} from 'react'

// importando o context
import { CounterContext } from '../context/CounterContext'

const Products = () => {

    const {counter} = useContext(CounterContext)

  return (
    <div>
        <h1>Products</h1>
        <h2>Numero: {counter}</h2>
    </div>
  )
}

export default Products