import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import AboutUs from './components/AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  if (currentPage === 'landing') {
    return (
      <div className="landing-page">
        <div className="landing-overlay"></div>
        <div className="landing-content">
          <h1>🌿 Welcome to Paradise Nursery</h1>
          <AboutUs />
          <button className="get-started-btn" onClick={() => setCurrentPage('products')}>
            Get Started 🌱
          </button>
        </div>
      </div>
    );
  }

  if (currentPage === 'products') {
    return (
      <div>
        <Navbar 
          onShowLanding={() => setCurrentPage('landing')}
          onShowProducts={() => setCurrentPage('products')}
          onShowCart={() => setCurrentPage('cart')}
          cartCount={totalQuantity}
        />
        <div className="products-page">
          <h1>Our Beautiful Plants</h1>
          <ProductList />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar 
        onShowLanding={() => setCurrentPage('landing')}
        onShowProducts={() => setCurrentPage('products')}
        onShowCart={() => setCurrentPage('cart')}
        cartCount={totalQuantity}
      />
      <CartPage />
    </div>
  );
}

export default App;
