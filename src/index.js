import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer';
import { configureStore } from '@reduxjs/toolkit';





function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter >
  <React.StrictMode>
  <ScrollToTop />  
    <App />
    </React.StrictMode>
  </BrowserRouter>
  
);
reportWebVitals();
