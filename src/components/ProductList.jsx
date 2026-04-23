import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plantsData = [
  { id: 1, name: 'Snake Plant', price: 25, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae9b2a?w=300', category: 'Low Light' },
  { id: 2, name: 'ZZ Plant', price: 35, image: 'https://images.unsplash.com/photo-1632207691143-643e2b9df936?w=300', category: 'Low Light' },
  { id: 3, name: 'Peace Lily', price: 30, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300', category: 'Flowering' },
  { id: 4, name: 'African Violet', price: 20, image: 'https://images.unsplash.com/photo-1597840414299-1f9b2e7fd439?w=300', category: 'Flowering' },
  { id: 5, name: 'Spider Plant', price: 22, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae9b2a?w=300', category: 'Air Purifying' },
  { id: 6, name: 'Aloe Vera', price: 28, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae9b2a?w=300', category: 'Air Purifying' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  const grouped = plantsData.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(grouped).map(([cat, plants]) => (
        <div key={cat}>
          <h2 className="category-title">{cat} Plants</h2>
          <div className="products-grid">
            {plants.map(p => (
              <div key={p.id} className="product-card">
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
                <button className="add-to-cart-btn" onClick={() => dispatch(addItem(p))} disabled={isInCart(p.id)}>
                  {isInCart(p.id) ? '✓ Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
