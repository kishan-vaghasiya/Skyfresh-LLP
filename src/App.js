import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </Router>
        <WhatsAppFloat />
    </>
  );
}

export default App;
