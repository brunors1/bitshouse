import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<p className='bg-white text-center fw-semibold'>Página meu carrinho</p>} />
            <Route exact path='/account' element={<p className='bg-white text-center fw-semibold'>Página minha conta</p>} />
            <Route exact path='/about' element={<p className='bg-white text-center fw-semibold'>Página sobre</p>} />
            <Route exact path='/contact' element={<p className='bg-white text-center fw-semibold'>Página de contato</p>} />
            <Route exact path='/checkout' element={<p>Rota de checkout</p>} />
            <Route exact path='*' element={<p className='bg-white text-center'>Página não encontrada</p>} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;