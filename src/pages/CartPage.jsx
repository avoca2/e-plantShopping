import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const CartPage = ({ onShowProducts }) => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="continue-shopping-btn" onClick={onShowProducts}>
            ← Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Cost: ${totalAmount.toFixed(2)}</p>
      </div>
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <div className="cart-buttons">
        <button className="continue-shopping-btn" onClick={onShowProducts}>
          ← Continue Shopping
        </button>
        <button className="checkout-btn" onClick={() => alert('Coming Soon! 🚧')}>
          Checkout →
        </button>
      </div>
    </div>
  );
};

export default CartPage;
