import {useState, useEffect} from "react"
import './App.css';

function App() {

  const [produtos, setProdutos] = useState([])

  const url = "http://localhost:3000/products"

  useEffect(() => {
     async function requisicao(){
      const res = await fetch(url)
      const data = await res.json()

      setProdutos(data)
     }


    requisicao()
  }, [])

    console.log(produtos)
     
  return (
    <div className="App">
        <h1>teste</h1>

        {produtos.map(produto => {
          return <p key={produto.id}>Nome: {produto.name}, preço: {produto.price}</p>
        })}

    </div>
  );
}

export default App;
