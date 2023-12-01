
// Criar o context
import {createContext, useState} from 'react'


export const CounterContext = createContext()

// criar o provider, é o elemento que "abraça" os outros
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(80)

    return(
        // Definir os valores disponiveis dentro do context provider
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )


}