import React from 'react';
import './App.css';
import TopHeader from './topheader/topheader';

import MainPage from './mainpage/mainpage';
import {Routes, Route, } from "react-router-dom";
import EconomCar from './components/sort-type-cars/econom-car';
import TransCar from './components/sort-type-cars/trans-car';
import ComfortCar from './components/sort-type-cars/comfort-car';
import PremiumCar from './components/sort-type-cars/premium-car';
import AutoPark from './components/menupage/autopark';
import PricePage from './components/menupage/pricerent';
import TransferPage from './components/menupage/transfer';
import InfoOrderCar from './components/menupage/infoordercar';




function App() {
  return (
    <>
      <TopHeader />
    
      <Routes>     
        <Route path="" element={<MainPage />} />
        <Route path="/economcar" element={<EconomCar />} />
        <Route path="/transportationcar" element={<TransCar />} />
        <Route path="/comfortcar" element={<ComfortCar />} />
        <Route path="/premiumcar" element={<PremiumCar />} />
        <Route path="/autopark" element={<AutoPark />} />
        <Route path="/pricepage" element={<PricePage />} />
        <Route path="/transferpage" element={<TransferPage />} />
        <Route path="/carname" element={<InfoOrderCar />} />
       

      </Routes>
       
      
      </>
    
   
  );
}

export default App;
