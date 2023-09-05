import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Banners from './components/Banners';
import Cart from './components/Cart';
import Search from './components/Search';

import Hd from './components/Hd'

function App() {
  return (
    <>
      <Hd></Hd>

      <Routes>
        <Route path="/" element={<Banners></Banners>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
    </Routes>

      
    </>
  );
}

export default App;
