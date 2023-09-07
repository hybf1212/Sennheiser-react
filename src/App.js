import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Banners from './components/Banners';
import Cart from './components/Cart';
import Search from './components/Search';

import Hd from './components/Hd'
import Footer from './components/footer';
import Slide from './components/Slide';

function App() {
  return (
    <>
      <Hd></Hd>
      <Slide></Slide>
      <Routes>
        <Route path="/" element={<Banners></Banners>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer></Footer>
      
    </>
  );
}

export default App;
