import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Banners from './components/Banners';
import Search from './components/Search';

import db from './data/db.json'

import Hd from './components/Hd'
import Footer from './components/footer';
import Slide from './components/Slide';
import BestSelling from './components/BestSelling';
import Benefits from './components/Benefits';

function App() {
  return (
    <>
      <Hd info={db.kr}></Hd>
      <Slide info={db.kr}></Slide>
      <Benefits></Benefits>
      <BestSelling info={db.kr}></BestSelling>
      <Routes>
        <Route path="/" element={<Banners></Banners>} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer></Footer>
      
    </>
  );
}

export default App;
