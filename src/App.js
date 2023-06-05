import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
import Faq from './components/Faq';

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
            <Route exact path='/cart' element={<Cart/>} />
            <Route exact path='/account' element={<p className='bg-white text-center fw-semibold'>Página minha conta</p>} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/faq' element={<Faq />} />
            <Route exact path='/checkout' element={<p>Rota de checkout</p>} />
            <Route exact path='*' element={<p className='bg-white text-center'>Página não encontrada</p>} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;