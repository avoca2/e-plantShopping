import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div>
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
      <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
};

export default CartItem;
