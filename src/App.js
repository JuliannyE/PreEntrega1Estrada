import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/navbar/NavBar'
import { Cart } from './pages/Cart';
import { Category } from './pages/Category';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<ItemListContainer/>} />
          <Route path='/cart' exact element={<Cart/> } />
          <Route path='/category/:categoryId' exact element={<Category/> } />
          <Route path='/item/:id' exact element={<ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
