import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Banners from './components/Banners';

import db from './data/db.json'

import Hd from './components/Hd'
import Footer from './components/footer';
import Slide from './components/Slide';
import BestSelling from './components/BestSelling';
import Benefits from './components/Benefits';
import Support from './components/Support';

function App() {
  return (
    <>
      <Hd info={db.kr}></Hd>
      <Slide info={db.kr}></Slide>
      <Benefits></Benefits>
      <BestSelling info={db.kr}></BestSelling>
      <Routes>
        <Route path="/" element={<Banners info={db.kr}></Banners>} />
      </Routes>
      <Support></Support>
      <Footer></Footer>
      
    </>
  );
}

export default App;
