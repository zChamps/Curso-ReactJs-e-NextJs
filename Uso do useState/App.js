import React, {useState} from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0)
  const mais = () =>{
    return setNumero(numero + 1)
  }
  const menos = () =>{
    return setNumero(numero - 1)
  }
  return (
    <div className="App">
      <>
        <h1>{numero}</h1>
        <button onClick={mais}>Acrescentar</button>
        <button onClick={menos}>Descrescer</button>
      </>
    </div>
  );
}

export default App;
