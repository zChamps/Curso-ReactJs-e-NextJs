import {useContext} from 'react'

// importando o context
import { CounterContext } from '../context/CounterContext'

const Home = () => {

    // Pegando um dos dados disponiveis pelo context para ser usado
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <h1>Home</h1>
        <h2>Numero: {counter}</h2>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>Aumentar Valor</button>
    </div>
  )
}

export default Home