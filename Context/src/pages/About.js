import {useContext} from 'react'

// importando o context
import { CounterContext } from '../context/CounterContext'

import {useTitleColorContext} from "../hooks/useTitleColorContext"

const About = () => {

    const {counter} = useContext(CounterContext)

    const {color} = useTitleColorContext()


  return (
    <div>
        <h1 style={{color: color}}>About</h1>
        <h2>Numero: {counter}</h2>
    </div>
  )
}

export default About