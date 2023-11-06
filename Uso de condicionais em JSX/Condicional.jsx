import React, {useState} from 'react'

const Condicional = () => {
  
  const [nome, setNome] = useState("Willian")
  
    return (
    <div>
        <h3>O nome correto é Willian, o nome está correto?</h3>
        <p>Nome: {nome}</p>

        {nome === "Willian" ? (
            <div>
                <p>O nome está correto!</p>
            </div>
        ) : (
            <div>
                <p>O nome está incorreto.</p>
            </div>
        )}

        <button onClick={() => {
            setNome("João")
        }}>Altere o nome!</button>
    </div>
  )
}

export default Condicional