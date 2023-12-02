import {useContext} from 'react'

// importando o context
import { CounterContext } from '../context/CounterContext'

import {useTitleColorContext} from "../hooks/useTitleColorContext"


const Home = () => {

    // Pegando um dos dados disponiveis pelo context para ser usado
    const {counter, setCounter} = useContext(CounterContext)

    const {color, dispatch} = useTitleColorContext()

    const setTileColor = (color) => {
      dispatch({type: color})
    }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <h2>Numero: {counter}</h2>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>Aumentar Valor</button>

        <div>
          <button onClick={() => setTileColor("RED")}>RED</button>
          <button onClick={() => setTileColor("BLUE")}>BLUE</button>
        </div>
    </div>
  )
}

export default Home