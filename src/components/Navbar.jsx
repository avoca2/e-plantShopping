import React from 'react';

const Navbar = ({ onShowLanding, onShowProducts, onShowCart, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={onShowLanding} style={{ cursor: 'pointer' }}>
        🌿 Paradise Nursery
      </div>
      <div className="nav-links">
        <button onClick={onShowLanding} className="nav-btn">Home</button>
        <button onClick={onShowProducts} className="nav-btn">Plants</button>
        <div className="cart-icon" onClick={onShowCart} style={{ cursor: 'pointer' }}>
          🛒
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
