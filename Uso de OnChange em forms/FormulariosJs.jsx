import React from 'react'
import { useState } from 'react'

const FormulariosJs = () => {
  let [texto, setTexto] = useState()

  // Função para ser alterado o "texto" quando for digitado algo
  const handleText = (e) => {
    setTexto(texto = e.target.value)
  }
  // Função para não atualizar a pagina automaticamente
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
        <p>Meu nome é: <span  style={{fontSize: "45px", fontWeight: "bold"}}>{texto}</span> </p>


        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="nome" id="nome" onChange={handleText}/>
            </label>
            <input type="submit" />
        </form>


    </div>
  )
}

export default FormulariosJs