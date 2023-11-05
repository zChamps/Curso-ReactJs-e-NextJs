import React from 'react'

const Challenge = () => {

    let v1 = 800
    let v2 = 380
    const HandleClick = () => {
        let resultado = v1 + v2
        const paragrafoResult = document.querySelector("#resultado")
        paragrafoResult.innerHTML = resultado
    }
  return (
    <>  
    
        <p>{v1}</p>
        <p>{v2}</p>

        


        <button onClick={HandleClick} >Clique aqui</button>
    

        <p id='resultado'></p>
    </>
  )
}

export default Challenge