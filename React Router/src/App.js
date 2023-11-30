import './App.css';

//1 importando configs
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Product from "./pages/Product"
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      {/* Irá aparecer em todas as rotas */}
      <div>Titulo Principal!</div>

      <BrowserRouter>{/* 2 - colocando configurações no codigo, todo elemento fora do BrowserRouter ficará aparecendo em todas as pags */}
      <Navbar />
      <SearchForm/>
      {/* Criando rotas */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          {/* Obtendo as paginas de forma dinamica pela url */}
          <Route path='/products/:id' element={<Product/>}></Route>
          {/* Criando uma rota composta, que tem como base o id do produto */}
          <Route path='/products/:id/info' element={<Info/>}></Route>
          {/* Erro 404, redirecionando */}
          <Route path='*' element={<NotFound/>}></Route>
          {/* Pagina de search */}
          <Route path='/search' element={<Search/>}></Route>
          {/* Redirecionamento de rotas */}
          <Route path='/company' element={<Navigate to={"/about"}/>}></Route>
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
