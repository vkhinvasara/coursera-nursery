// src/App.tsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShopPage from './components/ShopPage';
import { CartProvider } from './context/CartContext';
import CartIcon from './components/CartIcon';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="relative">
          <div className="absolute top-4 right-4">
            <CartIcon />
          </div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;