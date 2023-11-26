import {useState, useEffect} from "react"
import './App.css';
import {useFetch} from "./Hooks/useFetch"

function App() {

 const url = "http://localhost:3000/products"
  
 const [produtos, setProdutos] = useState([])
 const [name, setNome] = useState("")
 const [price, setPreco] = useState()
  



  //custom hook %% RECEBER DADOS
  const {data: items} = useFetch(url)





  //enviar dados
  
  const handleSubmit = async e => {
    e.preventDefault()

    const produto ={
      name: name,
      price: price
    }

    console.log(produto)

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto),
      
    })
    // carregamento dinamico dos itens
    const novoProduto = await res.json()
    setProdutos(produtosAnteriores => [...produtosAnteriores, novoProduto])
    setNome("")
    setPreco("")
  }



  return (
    <div className="App">
        <h1>teste</h1>

        {items && items.map(produto => {
          return <p key={produto.id}>Nome: {produto.name}, Preço: {produto.price}</p>
        })}


        <form action="POST" onSubmit={handleSubmit}>
          <li>
            <label id="nome">Nome:</label>
            <input type="text" name="name" id="name" value={name} onChange={e => setNome(e.target.value)}/>
          </li>
          <li>
            <label id="preco">Preco:</label>
            <input type="number" name="price" id="price" value={price} onChange={e => setPreco(e.target.value)} />
          </li>
          <input type="submit" value="Enviar" />
        </form>
    </div>
  );
}

export default App;
