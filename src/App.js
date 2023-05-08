import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (

      <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </div>
  );
}

export default App;
