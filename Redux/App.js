import './App.css';

//1 importando configs
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      {/* Irá aparecer em todas as rotas */}
      <div>Titulo Principal!</div>

      <BrowserRouter>{/* 2 - colocando configurações no codigo, todo elemento fora do BrowserRouter ficará aparecendo em todas as pags */}
      {/* Criando rotas */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          {/* Obtendo as paginas de forma dinamica pela url */}
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
